export const Contact = () => {
    return (
        <section 
            id='contact'
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/* <RevealOnScroll> */}
            <div className="px-4 w-150"> 
                <h2 
                    className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center"
                >
                    Contact Me!
                </h2>
                <form className="space-y-6">
                    <div className="grid grif-cols-1 md:grid-cols-2 gap-6">                        
                        <div>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500/5">
                            </input>
                        </div>

                        <div>
                            <input 
                            type="email" 
                            id="email"
                            name="email" 
                            required
                            placeholder="Your Email"
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500/5">
                            </input>
                        </div>
                    </div>
                        <textarea 
                        id="message" 
                        name="message" 
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500/5">
                        </textarea>                    
                    <div>

                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className=" bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-gray-700">
                            Send Message
                        </button>
                    </div>

                </form>
            </div>

            {/* </RevealOnScroll> */}
        </section>
    )
}