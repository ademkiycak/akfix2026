"use client";
import { useState } from "react";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";





export default function ResponsiveMenu() {

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
              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600">
                <Link href={""}>HOME</Link>
              </li>

              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600 group"
                onClick={() => {setSubMenuOpen(subMenuOpen == 'products' ? null : 'products')} }>
                <div className="flex justify-between items-center">
                  <Link href={"#"}>PRODUCTS</Link>
                  
                <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                </div>
                  {subMenuOpen == "products" && (
                      <ul className="ml-4 my-3">
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light focus:text-gray-600">
                          <Link href={""}>FIRE RATED SERIES</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>ADHESIVES & GLUES</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>SEALANTS</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>PU FOAMS</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>AEROSOLS</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>COATINGS</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>SPRAY PAINTS</Link>
                        </li>
                        <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                          <Link href={""}>ACCESSORIES</Link>
                        </li>
                      </ul>
                    )}
              </li>
              
              
              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600"
                onClick={() => {setSubMenuOpen(subMenuOpen == 'media' ? null : 'media')} }>
                <div className="flex justify-between items-center">
                  <Link href={""}>MEDIA</Link>
                <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                </div>
                {
                  subMenuOpen == 'media' && (
                    <ul className="ml-4 my-3">
                      <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                        <Link href={""}>CATALOG</Link>
                      </li>
                      <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                        <Link href={""}>BROCHURES</Link>
                      </li>
                      <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                        <Link href={""}>CERTIFICATES</Link>
                      </li>
                      <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                        <Link href={""}>GALLERIES</Link>
                      </li>
                      <li className="flex justify-between py-2 text-sm font-medium text-akfix-gray-light hover:text-gray-600">
                        <Link href={""}>VIDEOS</Link>
                      </li>
                    </ul>
                  )
                }
              </li>

              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600">
                <Link href={""}>BLOG</Link>
              </li>
              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600">
                <Link href={""}>CONTACT</Link>
              </li>

              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600">
                <Link href={""}>ONLINE CATALOG</Link>
              </li>


              <li className="flex flex-col justify-between p-4 border-b border-b-gray-200 font-medium text-akfix-gray-light hover:text-gray-600">
                <Link href={""}>NEW PRODUCTS</Link>
              </li>

            </ul>
          </nav>

      </div>
    </div>
  );
}
