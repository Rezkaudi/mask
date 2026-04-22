"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, memo, useCallback } from "react";
import { Menu, X } from "lucide-react";

// data
import navbarLinksData from "@/content/home/navbarLinks.json";
import ContactDetails from "@/content/home/ContactDetails.json";

// components
import ContactBtn from "@/components/pages/home/components/ContactBtn";

// ═══════════════════════════════════════════════════════════════════════════════
// PERFORMANCE OPTIMIZATION: Memoize static nav items to prevent re-renders
// ═══════════════════════════════════════════════════════════════════════════════

// Desktop navigation - memoized since it doesn't change
const DesktopNav = memo(function DesktopNav() {
  return (
    <nav
      className="hidden lg:flex items-center justify-end h-full w-full gap-8"
      aria-label="Main navigation"
    >
      <ul className="flex items-center justify-center gap-8 font-bold text-base text-[#B81122]">
        {navbarLinksData?.navbarItems?.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              title={`Maps to ${item.label}`}
              className="whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* SNS links */}
      <div className="hidden xl:flex items-center justify-start lg:justify-center gap-4">
        {navbarLinksData?.snsLinks?.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            title={`Maps to ${item.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={item.iconSrc}
              alt={item.name}
              width={40}
              height={40}
              loading="lazy" // ✅ SNS icons are not critical
            />
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-2">
        {navbarLinksData.navbarBtns?.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            title={`Maps to ${item.label}`}
            className="bg-[#B81122] font-black text-white text-base flex items-center justify-center gap-2 py-3 px-8 rounded hover:bg-[#a00f1e] transition-colors"
          >
            <span className="whitespace-nowrap">{item.label}</span>
            <Image
              src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/arrow-right-red.svg"
              alt="arrow right hadis"
              width={20}
              height={20}
              sizes="20px"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
});

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  // ✅ Memoize toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setActiveMenu((prev) => !prev);
  }, []);

  return (
    <header
      className="bg-white w-full h-16 lg:h-20 sticky top-0 z-50"
      aria-label="Website Header"
    >
      <div className="px-4 lg:px-7 flex overflow-y-auto items-center justify-between lg:justify-start gap-8 h-full relative">
        {/* Logo - Critical for LCP, keep priority */}
        <Link
          href="/"
          className="w-[70px] h-[45px] lg:w-[101px] lg:h-[64px] relative block"
        >
          <Image
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/hadis-logo.png"
            alt="Hadis Company Logo"
            fill
            priority // ✅ Logo is above-the-fold
            sizes="(max-width: 1024px) 70px, 101px"
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation - memoized component */}
        <DesktopNav />

        {/* Mobile Burger Button */}
        <button
          className="burger lg:hidden cursor-pointer flex items-center justify-center text-[#B81122] p-2"
          onClick={toggleMenu}
          aria-label={activeMenu ? "Close menu" : "Open menu"}
          aria-expanded={activeMenu}
          type="button"
        >
          {activeMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - Only renders DOM when needed via CSS transform */}
        <div
          className={`bg-white w-full space-y-10 h-[100vh] fixed overflow-y-auto top-16 left-0 z-50 py-7 px-5 lg:hidden transition-transform duration-300 ${
            activeMenu ? "translate-x-0" : "translate-x-[-100%]"
          }`}
          aria-hidden={!activeMenu}
        >
          <ul className="flex items-start flex-col justify-center gap-10 font-bold text-sm text-[#111111]">
            {navbarLinksData?.navbarItems?.map((item) => (
              <li key={item.id} onClick={toggleMenu}>
                <Link
                  href={item.href}
                  title={`Maps to ${item.label}`}
                  className="whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Details */}
          <div className="flex flex-col items-start justify-center w-full gap-4">
            <ContactBtn
              mobileLabel={ContactDetails.phoneNumber.label}
              label={ContactDetails.phoneNumber.label}
              href={ContactDetails.phoneNumber.href}
              variant="red"
              className="w-full sm:w-full text-3xl"
              onClick={toggleMenu}
            />
            <ContactBtn
              mobileLabel={ContactDetails.support.label}
              label={ContactDetails.support.label}
              href={ContactDetails.support.href}
              variant="blue"
              className="w-full sm:w-full text-xl"
              onClick={toggleMenu}
            />
            <ContactBtn
              mobileLabel={ContactDetails.line.label}
              label={ContactDetails.line.label}
              href={ContactDetails.line.href}
              variant="green"
              className="w-full sm:w-full text-xl"
              onClick={toggleMenu}
            />
          </div>

          {/* SNS Links */}
          <div className="flex items-center justify-start lg:justify-center w-full gap-4">
            {navbarLinksData?.snsLinks?.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                title={`Maps to ${item.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.iconSrc}
                  alt={item.name}
                  width={40}
                  height={40}
                  sizes="40px"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
