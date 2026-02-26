import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";


type BreadcrumbItem = {
  label?: string;
  href: string;
  icon?: IconDefinition;
  active?: boolean;
};

type BreadcrumbProps = {
  title?: string;
  color?: string;
  items: BreadcrumbItem[];
};



export default function Breadcrumb({
  title = "",
  color = "192, 0, 32",
  items
}: BreadcrumbProps) {
  return (
    <section
      className="w-full h-auto min-h-[70] flex items-center py-2"
      style={{ backgroundColor: `rgb(${ color ? color : "192, 0, 32" })` }}>
      <div className="w-[95%] xl:w-[85%] mx-auto flex flex-col justify-start lg:flex-row lg:justify-between lg:items-center gap-1">
        <h1 className="font-bold text-lg lg:text-xl text-white">
          {title}
        </h1>

        <nav>
          <ul className="flex items-center gap-2 text-white text-sm font-medium">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className={`hover:text-gray-100 ${
                    item.active ? "font-black" : ""
                  }`}
                >
                  {item.icon && (
                    <FontAwesomeIcon icon={item.icon} className="mr-1" />
                  )}
                  {item.label}
                </Link>

                {index < items.length - 1 && (
                  <span className="text-white text-xs">/</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
