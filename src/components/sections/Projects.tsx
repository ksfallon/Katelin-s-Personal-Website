import Caution from "../../assets/caution-risk-svgrepo-com.svg"
import Crane from "../../assets/crane-svgrepo-com.svg"

export const Projects 
= () => {
    
    return (
        <section 
            id='projects'
            className="min-h-screen flex items-center justify-center py-20"
        >
            
            <div className="text-center z-10 p-6">
                {/* <span flex-wrap className=" inline-flex gap-2 items-center">
                    <h1 
                        className="text-5xl md:text-8xl font-bold mb-6 
                        bg-gradient-to-r from-purple-500 to-white 
                        bg-clip-text text-transparent leading-right"
                    >
                        Under Construction
                    </h1>
                </span> */}
                
                <span flex-wrap className=" inline-flex gap-2 items-center">
                    <img src={Caution} className="size-15"></img>
                    <h1 
                        className="text-5xl md:text-7xl font-bold mb-6 p-2 
                        bg-gradient-to-r to-purple-500 from-white 
                        bg-clip-text text-transparent leading-right"
                    >
                        Projects Coming Soon
                    </h1>
                    <img src={Crane} className="size-15"></img>
                </span>
            </div>
        </section>
    )
}