import Link from "next/link";
import { Icon } from "./Icon";
import { utilityNav } from "./nav-config";

/** Thin dark meta bar pinned above the primary nav (locale/support/account). */
export function UtilityBar() {
  return (
    <div className="hidden bg-navy text-white lg:block">
      <div className="mx-auto flex h-11 max-w-350 items-center justify-end gap-7 px-8 text-[14px]">
        {utilityNav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-75"
          >
            {item.icon && <Icon name={item.icon} size={16} strokeWidth={1.8} />}
            {item.label}
            {item.chevron && (
              <Icon name="chevron" size={11} strokeWidth={2.2} className="rotate-90" />
            )}
          </Link>
        ))}
        <Link
          href="/customer-portal"
          aria-label="My account"
          className="transition-opacity hover:opacity-75"
        >
          <Icon name="user" size={28} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
