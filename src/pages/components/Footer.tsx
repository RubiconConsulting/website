import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6"
import { logo } from "../../assets"

const Footer = () => {
  const serveItem = ["Blockchain and Software Consulting", "AI in Blockchain", "Marketing", "Brand Building and Management", "Marketing Solutions", ""]
  const comItem = ["Blog", "Contact Us", "About Us", "Why Rubicon?", "FAQs"]
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 pb-4">
          <div>
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nostrum ducimus velit in quisquam labore, nulla dolorum eos natus rerum nemo blanditiis cupiditate sint explicabo.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-[600]">SERVICES</h2>
            <ul className="flex flex-col gap-2">
              {serveItem.map((item: any, index) => (
                <li key={index} className="cursor-pointer text-md">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-[600]">COMPANY</h2>
            <ul className="flex flex-col gap-2">
              {comItem.map((item: any, index) => (
                <li key={index} className="cursor-pointer text-md">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-[600]">CONTACT US</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <FaPhone size={22} className="cursor-pointer"/>
                <p>+2345 678 9102</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaEnvelope size={22} className="cursor-pointer"/>
                <p>rubicon@gmail.com</p>
              </div>

            </div>
            <div className="flex flex-col gap-2">
              <p>Social Media</p>
              <div className="flex flex-row gap-2 items-center">
                <FaInstagram size={22} className="cursor-pointer"/>
                <FaFacebook size={22} className="cursor-pointer"/>
                <FaLinkedin size={22} className="cursor-pointer"/>
                <FaTwitter size={22} className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer