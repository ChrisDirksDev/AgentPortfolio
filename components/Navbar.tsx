"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar section-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Chris Dirks, home">
          <span>CD</span><span>Chris Dirks<br />Digital Studio</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? "Close" : "Open"} navigation</span>
          <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
        </button>
        <div className="nav-links nav-links--desktop">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="nav-cta" href="mailto:chrisdirks.developer@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} id="mobile-navigation">
        {links.map((link, index) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</a>
        ))}
        <a href="mailto:chrisdirks.developer@gmail.com" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></a>
      </div>
    </header>
  );
}
