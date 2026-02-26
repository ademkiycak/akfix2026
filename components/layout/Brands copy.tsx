import Image from "next/image";
import Link from "next/link";

export default function Brands(){
    return(

      <div className="w-full h-auto p-3 bg-gray-100 my-30">
        <div className="container mx-auto flex items-center justify-center gap-20">

            <BrandItem url="#" img="/images/brands/1.png" />
            <BrandItem url="#" img="/images/brands/2.png" />
            <BrandItem url="#" img="/images/brands/3.png" />
            <BrandItem url="#" img="/images/brands/4.png" />
            <BrandItem url="#" img="/images/brands/5.png" />

        </div>
      </div>

    );
}



function BrandItem({url = "", img = ""}){
    return(
        <Link href={url} className="w-[150] h-[150] p-4 flex justify-center items-center shrink-0 border border-transparent hover:bg-white hover:border hover:border-[#00AE9B] rounded-lg">
            <div className="relative w-full h-full">
                <Image
                src={img}
                alt="brand"
                fill
                className="object-contain"
                />
            </div>
        </Link>
    );
}