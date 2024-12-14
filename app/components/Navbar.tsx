"use client";

import Link from "next/link";
import MappedLinks from "../components/MapedLinks";
import Dropdown from "../components/Reusable/m/Dropdown";
import ReusbleButton from "../components/Reusable/ReusbleButton";
import DarkModeToggle from "./Reusable/m/DarkModeToggle";

export default function Navbar() {
  // Navigation links
  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/project" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="name dark:text-white">
      <h1 className="md:text-3xl text-2xl font-bold">
        <Link href="/">ObiTech</Link>
      </h1>

      {/* Desktop Navigation */}
      <div className="lg:flex gap-8 items-center hidden">
        <MappedLinks links={links} />

        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Hire Me Button */}
        <ReusbleButton title={"Hire Me"} />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Dropdown />
      </div>
    </div>
  );
}