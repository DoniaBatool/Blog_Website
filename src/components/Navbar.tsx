"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const pathname = usePathname();

  // Properly type the useContext hook to avoid using `any`
  const themeContext = useContext(ThemeContext);

  // If the context is undefined (e.g., not within a ThemeProvider), throw an error.
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <header
      className={`py-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md transition-colors duration-300`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Blogs Daily</Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/blogs"
                className={`${
                  pathname === "/blogs" ? "text-red-500 font-semibold" : ""
                } hover:text-gray-600`}
              >
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === "/about" ? "text-red-500 font-semibold" : ""
                } hover:text-gray-600`}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-red-500 font-semibold" : ""
                } hover:text-gray-600`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dark Mode & Login (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center cursor-pointer">
            <span className="mr-2">Dark Mode</span>
            <Switch checked={isDarkMode} />
          </div>
          <Button variant="default" className="px-6">
            Login
          </Button>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
