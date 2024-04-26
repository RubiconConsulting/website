import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6"
import { logo } from "../../assets"
import { FaDiscord, FaMedium } from "react-icons/fa"

const Footer = () => {
  const serveItem = ["Blockchain and Software Consulting", "AI in Blockchain", "Marketing", "Brand Building and Management", "Marketing Solutions", ""]
  const comItem = ["Blog", "Contact Us", "About Us", "Why Rubicon?"]
  // const comItem = ["Blog", "Contact Us", "About Us", "Why Rubicon?", "FAQs"]
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 pb-4">
          <div>
            <img src={logo} alt="" />
            <p>Rubicon Consults is your go-to blockchain consulting firm for African entrepreneurs and businesses looking to make a global impact with web3 technologies. Our comprehensive suite of services, guided by our core values of transparency, speed, learning, and initiative, ensures that we are the leading force in propelling Africa's web3 revolution. Partner with us for expert ideation, strategy, development, and education, tailored to empower blockchain founders across Africa.</p>
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
                <a href="mailto:info.rubiconconsulting@gmail.com"><p>info.rubiconconsulting@gmail.com</p></a>
              </div>

            </div>
            <div className="flex flex-col gap-2">
              <p>Social Media</p>
              <div className="flex flex-row gap-2 items-center">
                <a href="https://discord.gg/SSdPr8u9" target="_blank" rel="noopener noreferrer"><FaDiscord size={22} className="cursor-pointer"/></a>
                <a href="https://medium.com/@info.rubiconconsulting" target="_blank" rel="noopener noreferrer"><FaMedium size={22} className="cursor-pointer"/></a>
                <a href="https://www.linkedin.com/company/rubicon-consults/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} className="cursor-pointer"/></a>
                <a href="https://twitter.com/rubiconconsult" target="_blank" rel="noopener noreferrer"><FaTwitter size={22} className="cursor-pointer"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer