"use client";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

/*
export default function Languages() {
    return(
        <div className="w-['auto'] h-['auto'] mt-5 group">
            <Link href={""} className="flex items-center space-x-1 text-akfix-gray-light group-hover:text-gray-600">
                <span className="w-7 h-7 rounded-full bg-akfix-red text-white text-xs flex justify-center items-center font-extrabold group-hover-bg-akfix-green">
                EN
                </span>
                <strong className="text-xs xl:text-sm font-bold ml-1">LANGUAGES</strong>
                <FontAwesomeIcon icon={faChevronDown} fontSize={10} />
            </Link>
        </div>
    );
}
*/




export default function MobileMenus() {
    
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link onClick={() => setOpen(true)} href={"#"}  className="lg:hidden">
          <FontAwesomeIcon icon={faBars} />
      </Link>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold">MENUS</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="p-4 space-y-3">
          Menu list...
        </nav>
      </div>
    </>
  );
}
