import Link from "next/link";
import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="py-4 min-w-60 shadow-xl">
      <ul className="flex flex-col  space-y-8 p-8">
        <NavItem
          href="/"
          text="Home"
          icon="https://i.ibb.co/ykLk3BG/home-removebg-preview.png"
        />
        <NavItem
          href="/"
          text="Store"
          icon="https://i.ibb.co/jvN7pFm/Screenshot-2024-04-16-at-9-32-55-PM-removebg-preview-1.png"
        />
        <NavItem
          href="/"
          text="Profile"
          icon="https://i.ibb.co/HHfzvht/Screenshot-2024-04-16-at-9-33-36-PM.png"
        />
        <NavItem
          href="/"
          text="Settings"
          icon="https://i.ibb.co/k81YCCk/Screenshot-2024-04-16-at-9-33-42-PM.png"
        />
      </ul>
      <div className="p-4 my-7">
  <p className="font-semibold mb-2">Theme</p>
  <div className="p-4 bg-gray-100 rounded-md flex items-center justify-between">
    <button className="mr-4">Primary color</button>
    <div className="rounded-full bg-red-400 w-6 h-6"></div>
  </div>
</div>
    </nav>
  );
};

const NavItem = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: string;
}) => {
  
  const initialBgColor = text === "Profile" ? "bg-[#FCF3F4]" : "";
  const initialTextColor = text === "Profile" ? "text-[#C63E4A]" : "";

  return (
    <div
      className={`hover:bg-[#FCF3F4] hover:text-[#C63E4A] ${initialBgColor} ${initialTextColor} p-3 rounded-md`}
    >
      <li className="w-full rounded-xl">
        <Link
          href={href}
          className="flex items-center text-gray-700 text-xl hover:text-[#C63E4A]"
        >
          <Image src={icon} alt={text} width={24} height={24} />
          <span className="ml-2">{text}</span>
        </Link>
      </li>
    </div>
  );
};


export default Sidebar;
