import { FaMarker } from "react-icons/fa";
import { HeroImg, edulogo, expect, hirelogo, seclogo } from "../../../assets";
import { Button } from "../../../ui";
import { Navbar } from "../../components";

const Herosection = () => {
  const serveItems = [
    {
      id: 1,
      title: "Blockchain and Software Consulting",
      text: "Expert guidance and technical support for your web3 projects.",
      icon: hirelogo,
    },
    {
      id: 2,
      title: "AI Integration in Blockchain",
      text: "Implementing AI solutions for enhanced data analysis and user experiences.",
      icon: edulogo,
    },
    {
      id: 3,
      title: "End-to-End Development",
      text: "From conception to execution, we bring your ideas to life with comprehensive product development support.",
      icon: seclogo,
    },
  ];


  return (
    <div >
      <Navbar />
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 py-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-[Jost] font-[700]">Most <span className="text-primary">outstanding</span>  blockchain agency</h2>
            <p>
              We are a blockchain consulting startup that helps you as a
              visionary, business leader, entrepreneur and founder translate
              web3 ideas into functional products for global use.
            </p>
            <div className="flex flex-row gap-4 items-center">
              <div>
                <Button btnText="Contact Us" btnStyle="bg-primary" />
              </div>
              <div>
                <Button
                  btnText="Learn More"
                  btnStyle="bg-transparent border-2 border-primary text-primary"
                />
              </div>
            </div>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
      {/* Building the web */}
        <div className="py-32 relative">
          <hr className="border-1 border-second -z-20"/>
          <div className="container">
            <div className="w-full md:w-3/4 left-0 top-0 bg-white bottom-0 right-0 flex flex-col gap-4 mx-auto rounded-xl shadow-xl px-24 py-12 absolute border-1 border-second z-50">
          <p className="text-2xl text-center font-[500] px-8">
            Building the best web3 projects being used in Africa by Africans
          </p>
          <div className="flex justify-between items-center flex-row ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <FaMarker color="#F3BA2F" />
                <p>Transparency</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaMarker color="#F3BA2F" />
                <p>Speed</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <FaMarker color="#F3BA2F" />
                <p>Learning</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaMarker color="#F3BA2F" />
                <p>Initiative</p>
              </div>
            </div>
          </div>
        </div> 
          </div>
          
        </div>
      {/* Services */}
      <div className="container py-12">
        <div className="w-full md:w-1/2 py-6 flex flex-col gap-4 mx-auto text-center">
          <h3 className="font-[600] text-3xl">Services We Offer with Expertise</h3>
          <p>
            Expert Consulting and Strategy DevelopmentUnlocking the Potential
            of Blockchain and AI Integration to Empower Your Web3 Journey
          </p>
        </div>
        <div className="w-full md:w-1/2 py-6 flex flex-col gap-4">
          <h3 className="font-[600] text-3xl">Expert Consulting and Strategy Development</h3>
          <p>
            Unlocking the Potential of Blockchain and AI Integration to Empower
            Your Web3 Journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-12">
          <div className="flex flex-col gap-8">
            {serveItems.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-row gap-4 justify-start items-start"
              >
                <img src={item.icon} alt="" />
                <div>
                  <p className="text-xl font-[600]">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={expect} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
