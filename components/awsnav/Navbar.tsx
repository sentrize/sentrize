"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { UtilityBar } from "./UtilityBar";
import { navGroups, cn } from "./nav-config";

/** Dark near-black pill CTA; flips to white in dark mode. */
const pillCta =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-foreground px-6 font-bold text-canvas transition-opacity hover:opacity-85";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Elevate the nav (blur + shadow) once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeGroup = navGroups.find((g) => g.label === openMenu);

  return (
    <header className={cn("sticky top-0 z-50", className)} data-aws-nav>
      <UtilityBar />
      <div
        className={cn(
          "border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-border/70 bg-canvas/90 shadow-[0_10px_30px_-12px_rgba(15,20,26,0.18)] backdrop-blur-xl"
            : "border-border/60 bg-canvas"
        )}
      >
        <div className="mx-auto flex h-18 max-w-350 items-center gap-4 px-5 sm:px-6 lg:h-20.75 lg:px-8">
          <Logo onDark={false} />

          {/* Desktop primary nav */}
          <nav className="ml-2 hidden items-center xl:flex" aria-label="Primary">
            {navGroups.map((group) => (
              <div
                key={group.label}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(group.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="navlink flex h-20.75 items-center gap-1 px-3.5 text-[15.5px] text-foreground transition-colors"
                  data-active={openMenu === group.label || pathname === group.top}
                  aria-expanded={openMenu === group.label}
                  onClick={() => setOpenMenu((v) => (v === group.label ? null : group.label))}
                >
                  {group.label}
                  <Icon
                    name="chevron"
                    size={12}
                    strokeWidth={2.2}
                    className={cn(
                      "mt-0.5 transition-transform",
                      openMenu === group.label ? "-rotate-90" : "rotate-90"
                    )}
                  />
                </button>
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 sm:gap-5">
            <Link
              href="/contact"
              className="hidden whitespace-nowrap text-[15.5px] text-foreground transition-colors hover:text-brand sm:block"
            >
              Talk to engineering
            </Link>
            <Link href="/contact" className={cn(pillCta, "hidden h-11 text-[15px] sm:inline-flex")}>
              Start a project
            </Link>

            {/* Mobile toggle */}
            <button
              className="grid h-10 w-10 place-items-center rounded-[8px] text-foreground hover:bg-surface xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Desktop mega-menu panel */}
        {activeGroup && (
          <div
            className="animate-menu-in absolute inset-x-0 top-full hidden border-b border-border bg-card shadow-pop xl:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-350 px-8 py-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                <div className="col-span-1">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-muted">
                    {activeGroup.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body">{activeGroup.blurb}</p>
                  <Link
                    href={activeGroup.top}
                    onClick={() => setOpenMenu(null)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline"
                  >
                    {activeGroup.topLabel} <Icon name="chevron" size={14} />
                  </Link>
                </div>
                <ul
                  className={cn(
                    "col-span-3 grid gap-x-6 gap-y-1",
                    activeGroup.links.length > 8 ? "grid-cols-3" : "grid-cols-2"
                  )}
                >
                  {activeGroup.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-start gap-2.5 rounded-md p-1.5 hover:bg-surface"
                      >
                        {link.icon && (
                          <span className="mt-0.5 text-brand">
                            <Icon name={link.icon} size={18} />
                          </span>
                        )}
                        <span>
                          <span className="block text-sm font-semibold text-foreground group-hover:text-brand">
                            {link.label}
                          </span>
                          {link.sub && (
                            <span className="block text-xs text-muted">{link.sub}</span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="animate-menu-in fixed inset-0 top-18 z-40 overflow-y-auto bg-canvas xl:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {navGroups.map((group) => (
              <details key={group.label} className="border-b border-border/60">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-lg font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {group.label}
                  <Icon name="chevron" size={16} className="rotate-90 text-muted" />
                </summary>
                <ul className="pb-3">
                  <li>
                    <Link
                      href={group.top}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-[15px] font-semibold text-link"
                    >
                      {group.topLabel}
                    </Link>
                  </li>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-[15px] text-body hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <div className="mt-5 flex flex-col gap-3 pb-10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={cn(pillCta, "h-12 text-base")}
              >
                Start a project
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong text-base font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Talk to engineering
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
