import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return(
        <nav className="mt-5 hidden lg:block">
            <ul className="flex gap-4 xl:gap-6 font-bold text-akfix-gray-light text-xs lg:text-sm xl:text-[16px]">

              <li className="flex space-x-2 relative group">
                <Link href="" className="flex items-center gap-2 hover:text-gray-600">
                  PRODUCTS 
                  <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                </Link>

                <ul className="w-max min-w-[280] absolute left-0 top-full hidden flex-col gap-2 bg-white shadow-lg rounded-md py-6  group-hover:flex z-60">
                    <li>
                      <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                        <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                          <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                        </div>
                        FIRE RATED SERIES 
                      </Link>
                    </li>
                    <hr className="text-gray-100" />
                    <li>
                      <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                        <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/adhesives-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                          <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                        </div>
                        ADHESIVES & GLUES
                      </Link>
                    </li>
                    <hr className="text-gray-100" />
                    <li>
                      <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                        <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/sealants-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                          <Image className="w-full h-auto" src="/images/categories/sealants-a.png" alt="Akfix" width={20} height={27} priority />
                        </div>
                        SEALANTS
                      </Link>
                    </li>
                    <hr className="text-gray-100" />
                    <li>
                      <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                        <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/foams-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                          <Image className="w-full h-auto" src="/images/categories/foams-a.png" alt="Akfix" width={20} height={27} priority />
                        </div>
                        PU FOAMS
                      </Link>
                    </li>
                    <hr className="text-gray-100" />
                    <li>
                      <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                        <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/coatings-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                          <Image className="w-full h-auto" src="/images/categories/coatings-a.png" alt="Akfix" width={20} height={27} priority />
                        </div>
                        COATING SYSTEMS
                      </Link>
                    </li>
                    <hr className="text-gray-100" />
                    <li>
                      <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                        <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/aerosols-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                          <Image className="w-full h-auto" src="/images/categories/aerosols-a.png" alt="Akfix" width={20} height={27} priority />
                        </div>
                        AEROSOLS
                      </Link>
                    </li>
                </ul>


              </li>

              <li className="flex space-x-2 relative group">
                <Link href="" className="flex items-center gap-2 hover:text-gray-600">
                  AKFİX 
                  <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                </Link>


                <ul className="w-max min-w-[280] absolute left-0 top-full hidden flex-col gap-2 bg-white shadow-lg rounded-md py-6  group-hover:flex z-60">
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      AKFİX
                    </Link>
                  </li>
                  <hr className="text-gray-100" />
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      R & D POLICY
                    </Link>
                  </li>
                  <hr className="text-gray-100" />
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      QUALITY POLICY
                    </Link>
                  </li>
                </ul>



              </li>

              <li className="flex space-x-2 relative group">
                <Link href="" className="flex items-center gap-2 hover:text-gray-600">
                  MEDIA 
                  <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
                </Link>


                <ul className="w-max min-w-[280] absolute left-0 top-full hidden flex-col gap-2 bg-white shadow-lg rounded-md py-6  group-hover:flex z-60">
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      CATALOG
                    </Link>
                  </li>
                  <hr className="text-gray-100" />
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      BROCHURES
                    </Link>
                  </li>
                  <hr className="text-gray-100" />
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      CERTIFICATES
                    </Link>
                  </li>
                  <hr className="text-gray-100" />
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      VIDEOS
                    </Link>
                  </li>
                  <hr className="text-gray-100" />
                  <li>
                    <Link href="" className="flex items-center gap-2 hover:text-gray-600 mx-5">
                      <div className="w-[45] h-[45] bg-red-600 rounded-full flex justify-center items-center p-3 bg-[url('/images/categories/bg/fire-rated-series-bg.jpg')] bg-center bg-no-repeat bg-cover ">
                        <Image className="w-full h-auto" src="/images/categories/fire-rated-series-a.png" alt="Akfix" width={20} height={27} priority />
                      </div>
                      GALLERIES
                    </Link>
                  </li>
                </ul>




              </li>

              <li className="flex space-x-2">
                <Link href="" className="flex items-center gap-2 hover:text-gray-600">
                  BLOG 
                </Link>
              </li>

              <li className="flex space-x-2">
                <Link href="" className="flex items-center gap-2 hover:text-gray-600">
                  CONTACT 
                </Link>
              </li>

            </ul>
        </nav>
    );
}