export const Home 
= () => {
return (
    <section 
        id='home' 
        className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 p-6">
            <h1 
                className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent leading-right"
            >
                Katelin Fallon's Portfolio
            </h1>
            <div className="p-6 rounded-xl">
                <p className=" text-grey-400 text-2xl px-5 mb-8 maw-x-lg mx-auto">
                    Hi, I’m Katelin Fallon, a full-stack software engineer based in Durham, NC. 
                    I specialize in building scalable, user-centered web applications with a strong 
                    focus on frontend experiences and backend reliability.
                </p>
            </div>
            <div className="flex justify-center space-x-4">
                <a 
                    href='#projects'
                    className="bg-cyan-700 border border-purple-700/50 text-purple-100 text-shadow-indigo-50 py-3 px-6 rounded text-xl transition relative overflow-hidden 
                    hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(58, 130, 246, 0.4)]
                    hover:bg-cyan-900/100"
                >
                    View Projects
                </a>
                <a 
                    href='#contact'
                    className="border border-purple-700/50 text-purple-300 py-3 px-6 rounded font-bold text-xl transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-[0_0_15px_rgba(58, 130, 246, 0.2)]
                    hover:bg-gray-900/100"
                >
                    Contact Me!
                </a>
            </div>
        </div>
    </section>
)
}