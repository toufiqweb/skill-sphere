"use client";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MyNavLink from "../ui/MyNavLink";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const user = session?.user;
  // console.log(user);

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

          {user ? (
            <div className="md:flex gap-3 items-center hidden">
              <Avatar size="sm">
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <Link href={"/"}>
                <Button
                  onClick={async () => await authClient.signOut()}
                  variant="outline"
                  className={"text-red-400 border border-red-100 "}
                >
                  Logout
                </Button>
              </Link>
            </div>
          ) : (
            <div className="md:flex gap-2 items-center hidden">
              <Link href={"/signup"}>
                <Button className={"bg-main-gradient rounded-md "}>
                  Register
                </Button>
              </Link>
              <Link href={"/signin"}>
                <Button className={"border-gradient text-black rounded-md"}>
                  Login
                </Button>
              </Link>
            </div>
          )}
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            {user && (
              <div className="mx-5 mt-5 ">
                <Avatar size="sm">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
              </div>
            )}
            <ul className="flex flex-col gap-2 p-4">{links}</ul>
            <div className="flex flex-col gap-3 space-y-2 m-2">
              {user ? (
                <>
                  <Link href={"/"}>
                    <Button
                      onClick={async () => await authClient.signOut()}
                      variant="outline"
                      className={"text-red-400 border border-red-100 "}
                    >
                      Logout
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/signin"}>
                    <Button className={"bg-main-gradient rounded-md "}>
                      Register
                    </Button>
                  </Link>
                  <Link href={"/signin"}>
                    <Button className={"border-gradient text-black rounded-md"}>
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
