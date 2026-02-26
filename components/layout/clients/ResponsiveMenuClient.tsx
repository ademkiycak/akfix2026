"use client";

import { useState } from "react";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";



interface Menus{
    id: number
    parentID: number
    url: string
    title: string
    img_url: string
    sub_menu: []
}


interface SubMenu{
    title: string
    url: string
    img_url: string

}

const ResponsiveMenuClient = ({data} : {data:Menus[]}) =>{

  type MenuKey = "products" | "media" | null;
    
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState<MenuKey | null>(null);

  return (
    <div className="flex flex-col justify-between">
      <Link onClick={() => setOpen(true)} href={"#"}  className="lg:hidden">
          <FontAwesomeIcon icon={faBars} fontSize={20} color="#5D5D60" />
      </Link>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div className={`fixed overflow-scroll top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b-[5] border-[#C00020] flex justify-between items-center">
          <span className="font-bold">
            <Image className="w-[110] h-auto lg:w-[140] xl:w-[170]" src="/images/logo.svg" alt="Akfix" width={170} height={64} priority />
          </span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

          <nav className="space-y-3 mt-5">
            <ul>


                <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600 group"
                    onClick={() => {setSubMenuOpen(subMenuOpen == 'products' ? null : 'products')} }>
                    <div className="flex justify-between items-center">
                        <Link href={"#"}>HOME</Link>
                        <FontAwesomeIcon icon={faChevronRight} fontSize={12} />
                    </div>
                </li>

                {
                    data.map((item, index) => (
                        <li key={index} className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600 group"
                            onClick={() => {setSubMenuOpen(subMenuOpen == 'products' ? null : 'products')} }>
                            <div className="flex justify-between items-center">
                                <Link href={"#"}>{item.title}</Link>
                                <FontAwesomeIcon icon={faChevronRight} fontSize={12} />
                            </div>
                        </li>
                    ))
                }


                

            </ul>
          </nav>

      </div>
    </div>
  );
}


export default ResponsiveMenuClient;