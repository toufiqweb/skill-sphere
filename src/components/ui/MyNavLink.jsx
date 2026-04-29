import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, children }) => {
  const pathname = usePathname();
//   console.log(pathname);

  return (
    <Link
      href={href}
      className={` text-black/60  ${pathname === href ? " text-main-gradient font-semibold border-b-2 border-b-blue-700" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
