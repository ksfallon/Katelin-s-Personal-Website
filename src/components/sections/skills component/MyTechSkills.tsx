// import type { IconType } from "react-icons";
// import { SiTypescript, SiJavascript, SiPython } from "react-icons/si";
// import { GrReactjs } from "react-icons/gr";
// import { RiAngularjsFill, RiTailwindCssLine } from "react-icons/ri";
// import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

interface SkillsObject {
    skillName: string;
    svgIcon: string;
}
const fullstackSkills: Array<SkillsObject> = [
    {skillName: "React", svgIcon: `src/assets/React.svg`},
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

export const MyTechSkills = () => {
return (
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
)
}
 