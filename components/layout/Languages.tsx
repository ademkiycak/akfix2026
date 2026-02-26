"use client";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function Languages() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        className={`fixed top-0 right-0 h-full w-75 bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold">SELECT LANGUAGES</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="p-4 space-y-3">
          Language list...
        </nav>
      </div>
    </>
  );
}
