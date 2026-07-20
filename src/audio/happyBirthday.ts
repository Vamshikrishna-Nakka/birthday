const NOTE_FREQ: Record<string, number> = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  "A#4": 466.16,
  C5: 523.25,
};

type Note = { n: keyof typeof NOTE_FREQ | null; d: number };

/** Classic Happy Birthday melody (public domain). */
const MELODY: Note[] = [
  { n: "C4", d: 0.28 },
  { n: "C4", d: 0.28 },
  { n: "D4", d: 0.55 },
  { n: "C4", d: 0.55 },
  { n: "F4", d: 0.55 },
  { n: "E4", d: 1.05 },

  { n: "C4", d: 0.28 },
  { n: "C4", d: 0.28 },
  { n: "D4", d: 0.55 },
  { n: "C4", d: 0.55 },
  { n: "G4", d: 0.55 },
  { n: "F4", d: 1.05 },

  { n: "C4", d: 0.28 },
  { n: "C4", d: 0.28 },
  { n: "C5", d: 0.55 },
  { n: "A4", d: 0.55 },
  { n: "F4", d: 0.55 },
  { n: "E4", d: 0.55 },
  { n: "D4", d: 1.05 },

  { n: "A#4", d: 0.28 },
  { n: "A#4", d: 0.28 },
  { n: "A4", d: 0.55 },
  { n: "F4", d: 0.55 },
  { n: "G4", d: 0.55 },
  { n: "F4", d: 1.2 },
];

let sharedCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let stopTimer: number | null = null;
let playing = false;
let muted = false;

function getCtx() {
  if (!sharedCtx) {
    sharedCtx = new AudioContext();
  }
  return sharedCtx;
}

export function isBirthdaySongPlaying() {
  return playing;
}

export function isBirthdaySongMuted() {
  return muted;
}

export function setBirthdaySongMuted(next: boolean) {
  muted = next;
  if (masterGain && sharedCtx) {
    const now = sharedCtx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setTargetAtTime(next ? 0.0001 : 0.14, now, 0.04);
  }
}

export function stopBirthdaySong() {
  playing = false;
  if (stopTimer != null) {
    window.clearTimeout(stopTimer);
    stopTimer = null;
  }
  if (sharedCtx) {
    void sharedCtx.close().catch(() => undefined);
    sharedCtx = null;
    masterGain = null;
  }
}

export async function playBirthdaySong(loops = 2) {
  stopBirthdaySong();
  muted = false;

  const ctx = getCtx();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  playing = true;
  masterGain = ctx.createGain();
  masterGain.gain.value = 0.14;
  masterGain.connect(ctx.destination);

  const beat = 0.42;
  let t = ctx.currentTime + 0.08;

  for (let loop = 0; loop < loops; loop++) {
    for (const note of MELODY) {
      if (!note.n) {
        t += note.d * beat;
        continue;
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = NOTE_FREQ[note.n];

      const start = t;
      const dur = note.d * beat;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.9, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(start);
      osc.stop(start + dur + 0.02);

      t += dur;
    }
    t += 0.35;
  }

  const ms = Math.max(0, (t - ctx.currentTime) * 1000 + 200);
  stopTimer = window.setTimeout(() => {
    playing = false;
    stopTimer = null;
  }, ms);
}
