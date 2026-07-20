import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Wish" },
  { to: "/letter", label: "Letter" },
  { to: "/memories", label: "Photos" },
  { to: "/forever", label: "Married" },
];

const darkPages = new Set(["/memories"]);

export function PageNav() {
  const { pathname } = useLocation();
  const onDark = darkPages.has(pathname);

  return (
    <nav className={`page-nav${onDark ? " on-dark" : ""}`} aria-label="Pages">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          end={link.to === "/"}
        >
          <span className="label">{link.label}</span>
          <span className="dot" />
        </NavLink>
      ))}
    </nav>
  );
}
