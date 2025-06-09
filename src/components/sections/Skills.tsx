import React from "../../assets/React.svg"
interface SkillsObject {
    skillName: string;
    svgIcon: string;
}
const fullstackSkills: Array<SkillsObject> = [
    {skillName: "React", svgIcon: React},
    {skillName: 'TypeScript', svgIcon: `src/assets/TypeScript.svg`},
    {skillName: 'JavaScript', svgIcon: `src/assets/Javascript.svg`},
    {skillName: 'AngularJS', svgIcon: `src/assets/AngularJS.svg`},
    {skillName: 'Tailwind CSS', svgIcon: `src/assets/Tailwind Css.svg`},
    {skillName: 'CSS', svgIcon: `src/assets/CSS3.svg`},
    {skillName: 'HTML', svgIcon: `src/assets/HTML5.svg`},
    {skillName: 'SQL Server', svgIcon: `src/assets/Microsoft SQL Server.svg`},
    {skillName: 'C#', svgIcon: `src/assets/CSharp.svg`},    
    {skillName: 'MongoDB', svgIcon: `src/assets/MongoDB.svg`},
    {skillName: 'Python', svgIcon: `src/assets/Python.svg`},
    // {skillName: '', svgIcon:},
    // {skillName: '', svgIcon:},
]

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
                {fullstackSkills.map((obj, key) => (
                    <span
                        key={key}
                        flex-wrap
                        className="text-purple-800 bg-purple-400 py-1 px-3 rounded-full text-sm 
                            hover:shadow-[0_2px_7px_rgba(59,130,2246,02) transition]
                            inline-flex gap-2 items-center
                        "
                    >
                        <text>{obj.skillName}</text>
                        <img src={obj.svgIcon} className="p-0.5 size-7"></img>
                    </span>
                ))}
            </div>
        </div>        
    </section>
)
}
 