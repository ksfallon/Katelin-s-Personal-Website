import globe from '../../assets/globe-2-svgrepo-com.svg'
export const Education = () => {
    return (
        <section
            id='education'
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 
                    className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center"
                >
                    EDUCATION
                </h2>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4 text-center text-blue-300"> University of North Carolina at Chapel Hill </h3>
                    <h2 className="text-xl font-bold mb-4"> Certificate, FullStack Coding Boot Camp</h2>
                    <text>React, HTML, CSS, Bootstrap, Javascript, Jquery, MongoDB, SQL, Node, Express, MongoDB, GraphQL</text>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400"> Pratt Institute </h3>
                    <h2 className="text-xl font-bold mb-4"> Masters in Science, Art and Design History</h2>
                    <text>
                        Studied Art and Design History with a focus in Art Conservation Science. Thesis focused on the History and paint 
                        pigments found in the wall paintings of the House of the Neptune and Ampitrite Mosaic in Herculanuem, Italy.
                    </text>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4 text-center text-blue-300"> University of North Carolina at Chapel Hill </h3>
                    <span flex-wrap className=" inline-flex gap-2">
                        <img src={globe} className="size-7 "></img>
                        <h2 className="text-xl font-bold mb-4"> Bachelors Degree, Geography</h2>
                    </span>
                    <h2>I majored in Geography with a focus on Environmental Geography, and I minored in Environmental Studies.</h2>
                </div>
            </div>
        </section>
    )
}