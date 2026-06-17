import navbarLinksData from "@/content/home/navbarLinks.json";

export interface INavItem {
  id: string;
  label: string;
  href: string;
}

// On a blog page the company profile section is rendered inline, so its
// nav links should scroll to that section instead of navigating home.
export const resolveNavItems = (pathname: string): INavItem[] => {
  const isBlogPage = pathname.startsWith("/blogs/");
  return navbarLinksData.navbarItems.map((item) =>
    isBlogPage && item.href === "/#company-profile"
      ? { ...item, href: "#company-profile" }
      : item,
  );
};
