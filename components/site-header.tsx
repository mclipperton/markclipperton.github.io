import type { ReactNode } from "react";
import Link from "next/link";
import { withSitePath } from "../lib/site-path";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
];

type SocialAction = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  icon: ReactNode;
  external?: boolean;
};

const socialActions: SocialAction[] = [
  {
    href: "https://www.linkedin.com/in/markclipperton/",
    label: "Connect on LinkedIn",
    variant: "secondary",
    icon: (
      <span className="action-pill-icon" aria-hidden="true">
        connect_without_contact
      </span>
    ),
    external: true,
  },
  {
    href: "mailto:mark.clipperton@outlook.com",
    label: "Email me",
    variant: "primary",
    icon: <MailIcon />,
  },
];

type SiteHeaderProps = {
  activePath: "/" | "/work" | "/approach";
};

export function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-mark" href="/" aria-label="Mark Clipperton home">
          <img
            alt="Mark Clipperton Product Designer"
            className="brand-mark-image"
            height="56"
            src={withSitePath("/logo.svg")}
            width="193"
          />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              aria-current={item.href === activePath ? "page" : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-actions" aria-label="Contact actions">
          {socialActions.map((action) => {
            const content = (
              <>
                {action.icon}
                <span>{action.label}</span>
              </>
            );

            const className = `action-pill action-pill-${action.variant}`;

            return action.external ? (
              <a
                key={action.label}
                className={className}
                href={action.href}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <a key={action.label} className={className} href={action.href}>
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        width="14"
        x="2"
        y="3"
      />
      <path
        d="m4.5 5.75 4.5 3.5 4.5-3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
