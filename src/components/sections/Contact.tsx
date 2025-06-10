import emailjs from 'emailjs-com'
import { useState, type FormEvent } from 'react'

interface FormData {
    name: string;
    email: string;
    message: string;
}

const intialFormData: FormData = {
    name: "",
    email: "",
    message: ""
}
export const Contact = () => {

    const SERVICE_ID: string = "service_de21nsv"
    const TEMPLATE_ID: string = "template_556lwzb"
    const PUBLIC_KEY: string = "ZfUOSap-QC_3I4CY8"

    const [formData, setFormData] = useState<FormData>(intialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleReset = () => {
        setFormData(intialFormData)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)
        .then((result) => {
            handleReset()
            alert("Message Sent");
            // set a console.log since 'result' isn't called and it causes a typeScript error
            console.log(result)
        }).catch(() => alert("Something went wrong, please try again"))
    } 

    return (
        <section 
            id='contact'
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/* <RevealOnScroll> */}
            <div className="px-4 w-150"> 
            <h1 
                className="text-5xl md:text-7xl font-bold mb-6 p-6 
                bg-gradient-to-r to-purple-500 from-white 
                bg-clip-text text-transparent leading-right text-center"
            >
                CONTACT ME
            </h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grif-cols-1 md:grid-cols-2 gap-6">                        
                        <div>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500/5"
                            placeholder="Your Name"
                            onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input 
                            type="email" 
                            id="email"
                            name="email" 
                            required
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500/5"
                            placeholder="Your Email"
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                        <textarea 
                        id="message" 
                        name="message" 
                        required
                        value={formData.message}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500/5"
                        placeholder="Your Message"
                        onChange={handleChange}
                        />                  
                    <div>

                    </div>
                    <div className="flex items-center justify-center">
                        <button 
                            type="submit" 
                            className=" bg-cyan-500 active:bg-cyan-700 focus:outline-offset-2 focus:outline-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer 
                            hover:-translate-y-0.5
                             hover:shadow-gray-700">
                            Send Message
                        </button>
                    </div>

                </form>
            </div>

            {/* </RevealOnScroll> */}
        </section>
    )
}
