import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";
import { hostUrl } from "../../../utils/ServerUrl";


const ContactSec = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${hostUrl}/contact`, {name, email, message})

      toast.success(`Messages Received, ${name}`, {position: "bottom-left"})
      setLoading(false);
    } catch (error: any) {
      toast.error(error, {position: "bottom-left"})
      setLoading(false);
    }finally{
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-start py-12">
            <div className="flex flex-col gap-4 pe-0 md:pe-32">
                <h2 className="text-2xl font-[500]">Let’s Keep in Touch</h2>
                <p>Tell us a bit about your business or project requirement and let’s talk. We’d love to hear from you.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-4 bg-second rounded-xl shadow-lg flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2  ">
                  <div className="flex flex-col gap-4">
                    <input type="text" value={name} onChange={(e: any) => setName(e.target.value)} className="w-full p-2 rounded-xl bg-second border-2 border-white text-white" placeholder="Name"/>
                    <input type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} name="" id="" className="w-full  border-2 border-white rounded-xl p-2 bg-second text-white" placeholder="Email Address"/>
                  </div>
                  <div>
                    <textarea name="" id="" value={message} onChange={(e:any) => setMessage(e.target.value)} className="w-full bg-second h-full border-2 border-white rounded-xl p-2 text-white" placeholder="Message"></textarea>
                  </div>
                </div>
                <div>
                 <button type="submit" className="bg-primary text-second px-6 py-2 rounded font-[500]">{loading ? "Sending" :"Let's Talk"}</button> 
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default ContactSec