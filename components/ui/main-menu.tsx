import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
export const subMenuList = [
    {
        title: "Title 1",
        href: "/href",
        icon: faHome
    }
];
*/

type BoxVariable = {
    title: string,
    icon?: IconDefinition,
    url: string,
}




export default function MainMenu({title, icon, url}: BoxVariable){
    return(
        <li className="flex space-x-2 hover:text-[#5D5D60] group">
            <a href={url} className="flex space-x-2 hover:text-[#5D5D60]">{title} {icon && <FontAwesomeIcon icon={icon} className="w-2.5" />}</a>
        

            <ul className="absolute pt-10 hidden group-hover:block flex-col gap-2">
            </ul>
        </li>
    );
}