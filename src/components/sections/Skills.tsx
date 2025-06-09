import React from "../../assets/React.svg"
interface SkillsObject {
    skillName: string;
    icon: string;
}
const languages: Array<SkillsObject> = [
    {skillName: "React", icon: React},
    {skillName: 'TypeScript', icon: `src/assets/TypeScript.svg`},
    {skillName: 'JavaScript', icon: `src/assets/Javascript.svg`},
    {skillName: 'Tailwind CSS', icon: `src/assets/Tailwind Css.svg`},
    {skillName: 'CSS', icon: `src/assets/CSS3.svg`},
    {skillName: 'HTML', icon: `src/assets/HTML5.svg`},
    {skillName: 'SQL Server', icon: `src/assets/Microsoft SQL Server.svg`},
    {skillName: 'C#', icon: `src/assets/CSharp.svg`},    
    {skillName: 'MongoDB', icon: `src/assets/MongoDB.svg`},
    {skillName: 'Python', icon: `src/assets/Python.svg`},
    // {skillName: '', icon:},
    // {skillName: '', icon:},
]

// const frameworks: Array<SkillsObject> =[
//     {skillName: "React", icon: React},
//     {skillName: "NodeJS", icon: "here"},
//     {skillName: "ExpressJS", icon: "here"},
//     {skillName: 'AngularJS', icon: `src/assets/AngularJS.svg`},


// ]

// const libraries: Array<SkillsObject> = [

// ]

export const Skills = () => {
return (
    <section
        id='skills'
        className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="px-4 w-150"> 
            <h2 
                className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center"
            >
                Skills
            </h2>
            <div className="flex flex-wrap gap-2 text-center">
                {languages.map((obj, key) => (
                    <span
                        key={key}
                        flex-wrap
                        className="text-purple-800 bg-purple-400 py-1 px-3 rounded-full text-sm 
                            hover:shadow-[0_2px_7px_rgba(59,130,2246,02) transition]
                            inline-flex gap-2 items-center
                        "
                    >
                        <text>{obj.skillName}</text>
                        <img src={obj.icon} className="p-0.5 size-7"></img>
                    </span>
                ))}
            </div>
        </div>        
    </section>
)
}
 