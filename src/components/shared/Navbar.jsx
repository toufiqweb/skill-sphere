"use client";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MyNavLink from "../ui/MyNavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyNavLink href="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/courses">Courses</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/profile">Profile</MyNavLink>
      </li>
    </>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <nav className="container mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div>
              <Image src={logo} alt="logo" width={130} height={130} />
            </div>
          </div>

          <ul className="hidden items-center gap-6 md:flex">{links}</ul>
          <div className="md:flex gap-2 items-center hidden">
            <Button className={"bg-main-gradient rounded-md "}>SignUp</Button>
            <Button className={"border-gradient text-black rounded-md"}>
              SignIn
            </Button>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">{links}</ul>
            <div className="flex flex-col gap-3 space-y-2 m-2">
              <Button className={"bg-main-gradient rounded-md "}>SignUp</Button>
              <Button className={"border-gradient text-black rounded-md"}>
                SignIn
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
