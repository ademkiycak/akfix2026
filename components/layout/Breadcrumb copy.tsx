import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Breadcrumb({title = "", color = "#00AE9B", items = [] }){
    return(
        <section className="w-full h-auto min-h-[70] flex items-center py-2"  style={{backgroundColor: `${color}`}}>
            <div className="w-[95%] xl:w-[85%] mx-auto flex flex-col justify-start lg:flex-row lg:justify-between lg:items-center gap-1">
                <h1 className="font-bold text-lg lg:text-xl text-white">{title}</h1>

                <nav>
                    <ul className="flex items-center gap-4 text-white text-sm font-medium">
                        <li className="hover:text-gray-100"><Link href={""}><FontAwesomeIcon icon={faHome} /></Link></li>
                        <span className="text-white text-xs">/</span>
                        <li className="hover:text-gray-100"><Link href={""}>Akfix</Link></li>
                        <span className="text-white text-xs">/</span>
                        <li className="hover:text-gray-100 font-bold"><Link href={""}>About</Link></li>
                    </ul>
                </nav>

            </div>
        </section>
    );
}