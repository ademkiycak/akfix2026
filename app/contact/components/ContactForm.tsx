import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactForm() {
    
    return(
        <div className="w-full h-auto flex flex-col space-y-5">
            <strong className="text-lg text-akfix-red">Contact Form</strong>

          <form action="" className="flex flex-col space-y-10">

            <div className="text-akfix-gray">
                <label className="block text-[16px] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name=""
                  placeholder="Your Full Name"
                  required
                  className="w-full border-b border-gray-300 py-2 focus:border-b-[#00AE9B] focus:outline-none transition"
                />
            </div>


            <div className="text-akfix-gray">
                <label className="block text-[16px] font-medium mb-2">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  name=""
                  placeholder="Your E-Mail Address"
                  required
                  className="w-full border-b border-gray-300 py-2 focus:border-b-[#00AE9B] focus:outline-none transition"
                />
            </div>


            <div className="text-akfix-gray">
                <label className="block text-[16px] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name=""
                  placeholder="Your Phone Number"
                  required
                  className="w-full border-b border-gray-300 py-2 focus:border-b-[#00AE9B] focus:outline-none transition"
                />
            </div>


            <div className="text-akfix-gray">
                <label className="block text-[16px] font-medium mb-2">
                  Message
                </label>
                <textarea
                  name=""
                  placeholder="Your Message"
                  required
                  className="w-full h-30 border-b border-gray-300 py-2 focus:border-b-[#00AE9B] focus:outline-none transition"
                />
            </div>


            <label className="flex items-center space-x-3 cursor-pointer mt-[-20]">
              <input type="checkbox" className="w-5 h-5 rounded-md focus:outline-none transition duration-200" />
              <span className="text-sm text-akfix-gray font-medium">
                I agree to all the statements included in our policy                
              </span>
            </label>



            <button className="w-fit px-5 py-3 bg-[#00AE9B] text-white rounded-lg hover:bg-[#C00020] cursor-pointer transition font-bold text-[16px] flex items-center mt-3" name="">
              Send Mail
              <FontAwesomeIcon icon={faPaperPlane} className="ml-3" />
              </button>
          

          </form>

          
        </div>
    );
}