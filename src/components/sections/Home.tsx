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
            <p className=" text-grey-400 text-2xl mb-8 maw-x-lg mx-auto">
                Hi! I'm a Full-stack Developer who enjoys coding. I need to put a better
                story experience myself here!
            </p>
            <div className="flex justify-center space-x-4">
                <a 
                    href='#projects'
                    className="bg-purple-500 text-shadow-indigo-50 py-3 px-6 rounded font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(58, 130, 246, 0.4)]
                    hover:bg-purple-800"
                >
                    View Projects
                </a>
                <a 
                    href='#contact'
                    className="border border-purple-700/50 text-purple-300 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-[0_0_15px_rgba(58, 130, 246, 0.2)]
                    hover:bg-purple-900/100"
                >
                    Contact Me!
                </a>
            </div>
        </div>
    </section>
)
}