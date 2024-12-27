"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="lg:hidden relative">
      {/* Hamburger Icon */}
      <Button
        onClick={toggleMobileMenu}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </Button>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <Button
            onClick={toggleMobileMenu}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <AiOutlineClose size={24} />
          </Button>
        </div>
        <ul className="flex flex-col space-y-6 p-4">
          <li>
            <Link
              href="/blogs"
              className="text-lg font-medium hover:text-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;
