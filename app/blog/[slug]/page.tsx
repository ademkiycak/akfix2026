"use client"

import Brands from "@/components/layout/Brands";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faChevronRight, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Blog(){



  return (
    <>
      <Header />

      <Breadcrumb
        title="What is a Chemical Anchor? How To Apply?"
        color="#00AE9B"
        items={[
          { href: "/", icon: faHome },
          { label: "Akfix", href: "/about" },
          { label: "What is a Chemical Anchor? How To Apply?", href: "/blog", active: true }
        ]}
      />



      {/* Blog */}
      <section className="w-full lg:w-5xl xl:w-7xl mx-auto p-5 mt-10 mb-20 flex justify-between flex-col lg:flex-row gap-15 lg:gap-20">
        
        <div className="w-full max-w-[900] h-auto flex flex-col space-y-4">
          
          {/** Blog item */}

          <div className="w-full h-auto flex flex-col bg-gray-50 p-2 rounded-lg space-y-3 text-[16px] text-akfix-gray leading-7
          [&_strong]:font-bold
          [&_strong]:text-xl
          [&_strong]:mt-5
          [&_h2]:text-xl
          [&_h2]:font-bold
          [&_h2]:mt-5
          [&_h3]:text-lg
          [&_h3]:font-bold
          [&_h3]:mt-5
          [&_h4]:text-lg
          [&_h4]:font-bold
          [
          [&_h5]:text-lg
          [&_h5]:font-bold
          [&_h5]:mt-5
          [&_a]:font-bold
          [&>a]:text-[#4197D2]
          [&_a]:hover:text-[#C00020]
          [&_a]:w-fit
          [&>a]:leading-4">
            <Image src={"/images/blog/blog-big-img-1.jpg"} width={700} height={299}  alt="blog" className="w-full h-auto object-cover rounded-lg" />
              <strong>How is Thermal and Sound Insulation Performed in the Roof?</strong>

              <p>
                Garrets are one of the areas where the house experiences the most heat loss and external sounds are heard most intensely. Therefore, effective heat and sound insulation in the roof increases comfort and saves energy. So how is the insulation of the garret performed, which materials should be preferred, what should be considered during the application? Here in this article, you can find all the details you need!
              </p>

              <h2>
                What is the Difference Between Chemical Anchor and Physical Anchor?
              </h2>
              <p>
                Chemical anchors are quite advantageous compared to physical dowels. While the area of use of the physical anchors is limited, the chemical anchors have no limit. The physical anchor, which has a certain shape, is only used in appropriately shaped and formed areas. The chemical anchor, on the other hand, takes the shape of the area where it is located and provides a wide area of use.
              </p>

              <h2>Where is Chemical Anchor Used?</h2>
              <p>You can use it safely in your chemical anchor structures, construction and industry. It has a wide range of uses, from embedding steel and ironstones in concrete, fixing support structural elements, mounting and fixing large poles, mounting installation materials, installing passive, temporary and permanent anchors and studs, and fixing large screws and metal dowels to the concrete floor.</p>
              <p>You can also easily apply chemical anchors in your homes. You can make applications such as fixing the balcony railing, fixing something to the wall in the radiator set, mounting towel racks and holding apparatus, etc.</p>


              <img src="/images/blog/blog-big-img-1.jpg" alt="blog" className="w-full h-auto object-cover rounded-lg" />

              <h3>How is Chemical Anchor Applied?</h3>
              <p>Depending on the chemical anchor packaging form, the gun varies. It can be used with its own special gun or silicone gun. Clean the inside of the surface you are drilling, remove dust and dirt. After placing the chemical anchor in the gun, attach it to the stirrer tip, squeeze the product about 15 cm so that the product is completely mixed out, then fill the gap you drilled. The stirring rod at the tip will remove component A and B by stirring.</p>

              <img src="/images/blog/blog-big-img-1.jpg" alt="blog" className="w-full h-auto object-cover rounded-lg" />

              <h3>Is Chemical Anchor Reused?</h3>
              <p>You can repeatedly use a chemical anchor that has been opened and used before. The important thing is that the chemicals in the chemical anchor should not be mixed together. The product at the stirring tip is not reused, the tip is removed and reused with the new stirring tip. Whether single-cartridge or double-cartridge, chemical anchors used once can be reused.</p>

              <Link href={""}>Video url 1</Link>
              <Link href={""}>Video url 2</Link>
              <Link href={""}>Video url 3</Link>

            <div className="mt-3 text-gray-600">
              <span className="text-xs">Tags : Thermcoat, pu foam, sound insulation</span>
            </div>

            <hr className="text-gray-300 my-4" />

            <div className="w-full flex justify-between items-center">

              <div className="flex flex-row space-x-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-akfix-green" />
                <span className="text-xs font-medium text-gray-500"> 16.02.2026 </span>
              </div>


              <div className="flex flex-row gap-3">
                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>

                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>

                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>

                <Link href={""} className="text-gray-600 hover:text-[#00AE9B] text-lg">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </div>

            </div>

          </div>



        </div>


        <div className="w-full max-w-full lg:max-w-[310] h-auto flex flex-col gap-8">

          <div className="w-full flex flex-col gap-3">
            <strong className="text-[#222]">Blog Categories</strong>
            <ul>
              <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3" /> DIY SOLUTIONS</Link>
              </li>
              <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> PU FOAMS</Link>
              </li>
              <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> PU SEALANTS</Link>
              </li>
              <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> ADHESIVES</Link>
              </li>
              <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> AEROSOLS</Link>
              </li>
              <li className="py-2 text-sm font-bold text-akfix-gray hover:text-[#C00020]">
                <Link href={""}> <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 w-3 h-3"  /> COATINGS</Link>
              </li>
            </ul>
          </div>


          <div className="w-full flex flex-col gap-3">
            <strong className="text-[#222]">Latest Posts</strong>


              <LatestPostItem 
                title="How is Thermal and Sound Insulation Performed in the Roof?"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="What is a Chemical Anchor? How To Apply?"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="What is a Chemical Anchor? How To Apply?"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="How to Apply Silicone in 4 Steps?"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="What is a Chemical Anchor? How To Apply?"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="Zero Risk In Insulation, Excellent Result: Akfix Aquazero"
                url=""
                create_at="22.08.2025"
              />

              <LatestPostItem 
                title="How to Apply Silicone in 4 Steps?"
                url=""
                create_at="22.08.2025"
              />
    
            
          </div>



        </div>



      </section>



      
      <Brands />
      <Footer />
    </>
  );
}









function LatestPostItem({title = "", url = "", create_at = ""}){
  return(
    <div className="w-full h-auto p-2 bg-white flex flex-col gap-2 border border-gray-100 rounded">
      <span className="text-[10px] font-bold text-white bg-gray-500 self-start py-0.5 px-2 rounded">{create_at}</span>
      <Link href={url}>
        <strong className="text-sm font-bold text-gray-600 hover:text-[#C00020]">{title}</strong>
      </Link>
    </div>
  );
}