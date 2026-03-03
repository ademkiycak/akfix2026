"use client";

import { useState } from "react";
import { faArrowCircleRight, faBars, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";



interface Menus{
    id: number
    parentID: number
    url: string
    title: string
    img_url: string
    sub_language: []
}


interface SubMenu{
    title: string
    url: string
    img_url: string

}

const LanguageMenuClient = ({data} : {data:Menus[]}) =>{

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between">

          <div className="w-['auto'] h-['auto'] mt-0 md:mt-2 group">
            <Link onClick={() => setOpen(true)} href={"#"} className="flex items-center space-x-1 text-akfix-gray-light group-hover:text-gray-600">
                <span className="w-8 h-8 rounded-full bg-akfix-red text-white text-sm flex justify-center items-center font-extrabold group-hover-bg-akfix-green">
                EN
                </span>
                <div className=" justify-center items-center gap-1 hidden lg:flex">
                  <strong className="text-xs xl:text-sm font-bold ml-1">LANGUAGES</strong>
                <FontAwesomeIcon icon={faChevronDown} fontSize={10} />
                </div>
            </Link>
        </div>



      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-75 bg-white z-90 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="px-4 py-5 border-b-7 border-[#00AE9B] flex justify-between items-center">
          <span className="font-bold text-akfix-red text-lg">SELECT LANGUAGES</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

            {
                data.map((item, index) => (
                    <li key={index} className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-gray-600 hover:text-[#C00020] group">
                        <Link href={item.sub_language.length > 0 ? "#" : `/${item.url}`}>
                          <div className="text-md flex justify-between items-center">
                              {item.title}
                                {
                                  item.sub_language.length > 0 && ( <FontAwesomeIcon icon={faChevronRight} fontSize={12} /> )
                                }
                          </div>
                        </Link>

                        {
                          item.sub_language.length > 0 && (
                            <ul className="hidden group-focus-within:block ml-3 my-3">
                            {
                              item.sub_language.map((item:SubMenu, index) => (
                                <li key={index} className="flex justify-between py-2 text-md font-medium text-akfix-gray-light hover:text-gray-600">
                                  <Link href={`${item.url}`} target={"_blank"}> <FontAwesomeIcon icon={faArrowCircleRight} fontSize={14} /> {item.title}</Link>
                                </li>
                              ))
                              
                            }
                            </ul>
                          )
                        }

                    </li>
                ))
            }
        
      </div>
    </div>
  );
}


export default LanguageMenuClient;