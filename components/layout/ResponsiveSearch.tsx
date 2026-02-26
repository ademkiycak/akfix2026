"use client";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function ResponsiveSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <div className="w-['auto'] h-['auto'] block md:hidden group">
            <Link onClick={() => setOpen(true)} href={"#"} className="flex items-center space-x-1 text-akfix-gray-light group-hover:text-gray-600">
                <span className="w-8 h-8 rounded-full bg-akfix-gray text-white text-xs flex justify-center items-center font-extrabold group-hover-bg-akfix-green">
                <FontAwesomeIcon icon={faSearch} fontSize={16} />
                </span>
            </Link>
        </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-75 bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold">RESPONSIVE SEARCH</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="p-4 space-y-3">
          Search Product list...
        </nav>
      </div>
    </>
  );
}
