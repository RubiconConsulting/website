import { brandstr, edulogo, hirelogo, insight1, insight2, insight3, insight4, seclogo, work1, work2, work3 } from "../../../assets"
import InsightCard from "../../../ui/InsightCard";


const Workforce = () => {

    const brandItems = [
    {
      id: 1,
      title: "Marketing Solutions",
      text: "Implementing targeted strategies to amplify your brand's presence in the African market.",
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

   const workItems = [
    {
      id: 1,
      title: "Hiring Expertise",
      text: "Connect with vetted web3 developers, designers, and talent for your projects.",
      icon: hirelogo,
    },
    {
      id: 2,
      title: "Education and Training",
      text: "Discover top-quality training for tech enthusiasts. Whether you're delving into a specific Blockchain Protocol or seeking comprehensive Blockchain Technology education, we've got you covered. Our specialized courses ensure you're well-versed in the latest advancements and applications of Blockchain Technology.",
      icon: edulogo,
    },
    {
      id: 3,
      title: "Security and Auditing Services",
      text: "Comprehensive solutions to safeguard blockchain protocols and assets, ensuring robust security and mitigating vulnerabilities",
      icon: seclogo,
    },
  ];


  const insightItems = [
    {
        id: 1,
        title: "Maasive Farming on Rise",
        text: "Discover the world of crypto farming and learn how to earn passive income through decentralized finance (DeFi) protocols. Explore the benefits, challenges, and best practices to maximize your returns.",
        img: insight1
    },
    {
        id: 2,
        title: "Web3 space grows by 300%",
        text: "Dive into the rapid expansion of the Web3 space, witnessing a staggering 300% growth. Discover what's driving this surge and how you can be part of this revolutionary movement.",
        img: insight2
    },
    {
        id: 3,
        title: "Blockchain is new Venture",
        text: "Explore how blockchain technology is revolutionizing industries worldwide. Learn about its potential, benefits, and how you can leverage it for your business or career.",
        img: insight3
    },
    {
        id: 4,
        title: "AI is becoming integral part ...",
        text: "Explore the growing importance of artificial intelligence (AI) in today's world. Learn how AI is revolutionizing industries, enhancing efficiency, and fostering innovation.",
        img: insight4
    }
  ]

  return (
    <div>
        <div className="container">
            <div className="w-full md:w-1/2 flex flex-col gap-4 py-8 md:text-start text-center">
                <p className="text-2xl font-[500]">Workforce Development and Security Assurance</p>
                <p>Empowering Your Web3 Ecosystem with Talent Acquisition and Cybersecurity Measures</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 py-12">
                <div className="flex flex-row gap-2">
                    <div className="pt-12">
                        <img src={work1} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src={work2} alt="" />
                        <img src={work3} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {workItems.map((item: any) => (
                        <div key={item.id} className="flex flex-row gap-4 justify-start items-start">
                                <img src={item.icon} alt="" />
                            <div>
                                <h3 className="text-xl font-[500]">{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Brand Stren */}
            <div className="w-full md:w-1/2 py-6 flex flex-col gap-4 mx-auto text-center">
                <h3 className="font-[600] text-3xl">Brand Strategy and Management</h3>
                <p>Nurturing Your Web3 Identity: Crafting a Distinctive Presence through Building, Marketing, and Strategizing</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-12">

                 <div className="flex flex-col gap-6">
                    {brandItems.map((item: any) => (
                        <div key={item.id} className="flex flex-row gap-4 justify-start items-start" data-aos="zoom-in">
                            <img src={item.icon} alt="" />
                            <div>
                                <h3 className="text-xl font-[500]">{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <img src={brandstr} alt="" />
                </div>
            </div>
            {/* Insight in Web 3.0 space */}
            <div className="w-full md:w-1/2 py-12 flex flex-col gap-4" id="blogs">
                <h2 className="text-2xl font-[500]">Insights into the Web3 space</h2>
                <p>Dive into the dynamic world of Web3 with our insightful articles and resources. Discover the latest trends, technologies, and applications shaping the future of the decentralized web. Stay ahead of the curve and unlock the potential of Web3 today.</p>
            </div>
            <div className="grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-start items-start">
                {insightItems.map((item: any) => (
                    <InsightCard key={item.id} img={item.img} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workforce