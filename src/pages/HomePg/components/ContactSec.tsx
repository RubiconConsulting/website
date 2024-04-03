

const ContactSec = () => {
  return (
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-start py-12">
            <div className="flex flex-col gap-4 pe-0 md:pe-32">
                <h2 className="text-2xl font-[500]">Let’s Keep in Touch</h2>
                <p>Tell us a bit about your business or project requirement and let’s talk. We’d love to hear from you.</p>
            </div>
            <div className=" p-4 bg-second rounded-xl shadow-lg flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2  ">
                  <div className="flex flex-col gap-4">
                    <input type="text" className="w-full p-2 rounded-xl bg-second border-2 border-white text-white" placeholder="Name"/>
                    <input type="email" name="" id="" className="w-full  border-2 border-white rounded-xl p-2 bg-second text-white" placeholder="Email Address"/>
                  </div>
                  <div>
                    <textarea name="" id="" className="w-full bg-second h-full border-2 border-white rounded-xl p-2 text-white" placeholder="Message"></textarea>
                  </div>
                </div>
                <div>
                 <button className="bg-primary text-second px-6 py-2 rounded font-[500]">Let's Talk</button> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ContactSec