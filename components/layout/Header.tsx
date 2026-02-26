import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Languages from "./Languages";
import Search from "./Search";
import ResponsiveMenu from "./ResponsiveMenu";
import ResponsiveSearch from "./ResponsiveSearch";


export default function Header(){

    return(
        <>
          <div className="hidden lg:block w-[95%] xl:w-[85%] mx-auto space-x-4 text-right mt-3">
            <Link href={""} className="text-xs font-medium text-primaryx text-akfix-gray-light hover:text-gray-600 ">ONLINE CATALOG</Link>
            <span className="text-gray-300">|</span>
            <Link href={""} className="text-xs font-medium text-akfix-gray-light hover:text-gray-600">NEW PRODUCTS</Link>
          </div>

          <div className="w-[95%] xl:w-[85%] mx-auto mt-5 py-2 flex gap-5 md:gap-10 xl:gap-10 items-center justify-between">

           <div className="w-full max-w-[170] flex items-center gap-5 lg:gap-0">
              <ResponsiveMenu />
              <Link href={"/"}>
                <Image className="w-[110] h-auto lg:w-[140] xl:w-[170]" src="/images/logo.svg" alt="Akfix" width={170} height={64} priority />
              </Link>
           </div>

            <NavBar />
            <Search />
            <div className="flex gap-3">
              <ResponsiveSearch />
              <Languages />
            </div>

          </div>

          <div className="w-full h-[7] bg-akfix-red mt-5"></div>

        </>
    );

}



