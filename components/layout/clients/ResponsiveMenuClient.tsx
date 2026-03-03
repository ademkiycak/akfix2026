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

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between">
      <Link onClick={() => setOpen(true)} href={"#"}  className="lg:hidden">
          <FontAwesomeIcon icon={faBars} fontSize={20} color="#5D5D60" />
      </Link>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div className={`fixed overflow-scroll top-0 left-0 h-full w-70 bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b-[5] border-[#C00020] flex justify-between items-center">
          <span className="font-bold">
            <Image className="w-[110] h-auto lg:w-[140] xl:w-[170]" src="/images/logo.svg" alt="Akfix" width={170} height={64} priority />
          </span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

          <nav className="space-y-3 mt-5">
            <ul>

                <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-gray-600 hover:text-[#C00020] group">
                    <Link href={"/"}>
                      <div className="text-md flex justify-between items-center">
                          HOME
                      </div>
                    </Link>

                </li>

                {
                    data.map((item, index) => (
                        <li key={index} className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-gray-600 hover:text-[#C00020] group">
                            <Link href={item.sub_menu.length > 0 ? "#" : `/${item.url}`}>
                              <div className="text-md flex justify-between items-center">
                                  {item.title}
                                    {
                                      item.sub_menu.length > 0 && ( <FontAwesomeIcon icon={faChevronRight} fontSize={12} /> )
                                    }
                              </div>
                            </Link>

                            {
                              item.sub_menu.length > 0 && (
                                <ul className="hidden group-focus-within:block ml-4 my-3">
                                {
                                  item.sub_menu.map((item:SubMenu, index) => (
                                    <li key={index} className="flex justify-between py-3 text-md font-medium text-gray-400 hover:text-gray-600">
                                      <Link href={`/${item.url}`}>{item.title}</Link>
                                    </li>
                                  ))
                                  
                                }
                                </ul>
                              )
                            }

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