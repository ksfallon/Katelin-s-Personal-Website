import React from "../../assets/React.svg"
import Typescript from "../../assets/TypeScript.svg"
import JavaScript from "../../assets/JavaScript.svg"
import TailwindCSS from "../../assets/Tailwind CSS.svg"
import CSS from "../../assets/CSS3.svg"
import HTML from "../../assets/HTML5.svg"
import SQLServer from "../../assets/Microsoft SQL Server.svg"
import CSharp from "../../assets/CSharp.svg"
import MongoDB from "../../assets/MongoDB.svg"
import Python from "../../assets/Python.svg"
import NodeJS from "../../assets/Node.js.svg"
import ExpressJS from "../../assets/Express.svg"
import AngularJS from "../../assets/AngularJS.svg"
import dotNet from "../../assets/NET.svg"
import dotNetCore from "../../assets/NET core.svg"
import Jest from "../../assets/Jest.svg"

interface SkillsObject {
    skillName: string;
    icon: string;
}
const frontend: Array<SkillsObject> = [
    {skillName: "React", icon: React},
    {skillName: 'TypeScript', icon: Typescript},
    {skillName: 'JavaScript', icon: JavaScript},
    {skillName: 'CSS', icon: CSS},
    {skillName: 'Tailwind CSS', icon: TailwindCSS},
    {skillName: 'HTML', icon: HTML},
    {skillName: 'AngularJS', icon: AngularJS},
    {skillName: 'Jest', icon: Jest},
    // {skillName: '', icon:},
]

const backend: Array<SkillsObject> =[
    {skillName: "NodeJS", icon: NodeJS},
    {skillName: "ExpressJS", icon: ExpressJS},
    {skillName: 'SQL Server', icon: SQLServer},
    {skillName: 'C#', icon: CSharp},    
    {skillName: 'MongoDB', icon: MongoDB},
    {skillName: 'Python', icon: Python},
    {skillName: '.NET', icon: dotNet},
    {skillName: '.Net Core', icon: dotNetCore}
]

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
            <div className="grid md:grid-cols-2 gap-6"> 

                <div className="flex flex-wrap gap-2 text-center">
                    {frontend.map((obj, key) => (
                        <span
                            key={key}
                            flex-wrap
                            className="text-purple-800 bg-purple-400 py-1 px-3 rounded-full text-lg 
                                hover:shadow-[0_2px_7px_rgba(59,130,2246,02) transition]
                                inline-flex gap-2 items-center
                            "
                        >
                            <text>{obj.skillName}</text>
                            <img src={obj.icon} className="p-0.5 size-7"></img>
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 text-center">
                    {backend.map((obj, key) => (
                        <span
                            key={key}
                            flex-wrap
                            className="text-purple-800 bg-purple-400 py-1 px-3 rounded-full text-lg 
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
        </div>        
    </section>
)
}
 