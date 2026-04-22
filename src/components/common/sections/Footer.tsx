import Image from "next/image";
import Link from "next/link";
// data
import navbarLinksData from "@/content/home/navbarLinks.json";

const Footer: React.FC = () => {
  return (
    <footer className="mb-32 xl:mb-20" aria-label="Website Footer">
      <div className="bg-white py-10 px-4 space-y-5 lg:space-y-6 font-medium text-sm lg:text-base text-[#B81122] flex items-center justify-center w-full flex-col">
        {/* logo */}
        <Link href={"/"} className="block">
          <Image
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/hadis-logo.png"
            alt="Hadis International Logo"
            width={101}
            height={64}
            style={{ width: "101", height: "64" }} 
          />
        </Link>

        {/* navitems */}
        <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-center h-full w-full gap-8">
          <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 font-bold text-base">
            {navbarLinksData?.navbarItems?.map((item) => (
              <li key={item.id}>
                <Link href={item.href} title={`Maps to ${item.label}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-start lg:items-center justify-center gap-2 font-bold">
            {navbarLinksData.navbarBtns?.map((item) => (
              <span key={item.id}>
                <Link href={item.href} title={`Maps to ${item.label}`}>
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </nav>

        {/* sns */}
        <div className="flex items-center justify-start lg:justify-center w-full gap-4">
          {navbarLinksData?.snsLinks?.map((item) =>
            item.href.startsWith("mailto:") ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Maps to ${item.name}`}
              >
                <Image
                  src={item.iconSrc}
                  alt={item.name}
                  width={40}
                  height={40}
                />
              </a>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Maps to ${item.name}`}
              >
                <Image
                  src={item.iconSrc}
                  alt={item.name}
                  width={40}
                  height={40}
                />
              </Link>
            ),
          )}
        </div>

        {/* copyright */}
        <span className="text-xs text-[#CA999B]">
          Copyright © ハディズ All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;