"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-sm font-medium transition-all duration-300"
    >
      <span
        className={
          isActive
            ? "text-main-gradient font-semibold"
            : "text-secondary group-hover:text-primary"
        }
      >
        {children}
      </span>

      <span
        className={`
          absolute
          -bottom-1
          left-0
          h-[2px]
          bg-main-gradient
          rounded-full
          transition-all
          duration-300
          ${
            isActive
              ? "w-full opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }
        `}
      />
    </Link>
  );
};

export default MyNavLink;
