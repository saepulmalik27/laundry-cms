"use client"
import React from "react";
import Logo from "../logo/Logo";
import SVG from 'react-inlinesvg'
import {
    useRouter,
    usePathname
} from 'next/navigation'
import { twMerge } from "tailwind-merge";
type TListMenu = {
  label: string;
  url: string;
  icon: string;
};

const listMenu: TListMenu[] = [
  {
    label: "Home",
    url: "/",
    icon: "/icons/home_outline.svg",
  },
  {
    label: "Products",
    url: "/products",
    icon: "/icons/folder_open.svg",
  },
  {
    label: "Sales",
    url: "/sales",
    icon: "/icons/line_chart_up.svg",
  },
  {
    label: "Settings",
    url: "/settings",
    icon: "/icons/settings.svg",
  },
];

const Aside = () => {

    const {push} = useRouter()
    const pathname = usePathname()
    const handleClickMenu = (target : string) => {
      console.log("aside");
      
        push(target)
    }
    console.log(pathname);
    

  return (
    <aside className="hidden md:flex bg-lightblue-500  flex-col gap-20 text-white p-10">
      <Logo />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Menu</h3>
        <ul>
          {listMenu.map((menu, index) => (
            <li onClick={() => {handleClickMenu(menu.url)}}  className={twMerge("flex px-[10px] py-3 gap-4 items-center cursor-pointer", "hover:bg-white hover:text-lightblue-400 hover:rounded-xl hover:font-bold", pathname === menu.url && 'text-lightred-500  rounded-xl font-bold')} key={index}>
                <SVG src={menu.icon} />
              <p className="text-[26px] select-none">{menu.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
