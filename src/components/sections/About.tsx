import { MyTechSkills } from "./skills component/MyTechSkills";

export const About 
= () => {
    return (
        <section
            id='about'
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 
                    className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1transition-all">
                    <p className="text-gray-300 mb-6">
                        Experiance in IPaas, building scalable web applications.. and so much more!
                    </p>
                </div>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-3xl font-bold mb-4 text-center">Skills</h3>
                        <MyTechSkills/>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-3xl font-bold mb-4 text-center"> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div className="p-6">
                            <h4 className="text-lg bg-cyan-900/30 rounded-full text-center"> Software Developer II at Lytho, Inc. (May 2024 - April 2025)</h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                                <li>
                                    Implemented integrations between Lytho’s Workflow app and Slack, Microsoft Teams and Jira. 
                                    Served as the point person for the Microsoft Teams integration, which included building a 
                                    unique MS Teams app and Azure Bot. The integrations opened up users to new ways to access 
                                    and communicate with Lytho’s Workflow app, enhancing their experience and efficiency.
                                </li>
                                <li>
                                    Assisted in developing open APIs for the Workflow app using AWS SQS, enabling customers to 
                                    interact programmatically by searching for and updating individual or grouped work items. 
                                </li>
                                <li>
                                    Upgraded four backend repositories from .NET6 to .NET9 to enhance security, performance and 
                                    package compatibility.
                                </li>
                                <li>
                                    Created internal Confluence documentation for the Shared Custom Views epic and the integration 
                                    work with Microsoft Teams to ensure other developers know the goals behind and the functionality 
                                    of the features. The Microsoft Teams Integration documentation focused on setup and updates for 
                                    the unique Teams app and Azure Bot, and customer support documents for CX.
                                </li>
                                <li>
                                    Developed a custom color selection feature using a color wheel. It enables users to select any
                                    color based on color code across five different work item types. The work items’ icons are 
                                    dynamically displayed as black or white for optimal visibility. The feature improves user 
                                    experience by allowing customization for company branding and enabling quicker visual distinction 
                                    of work items.
                                </li>
                                <li>
                                    Participated in Agile/Scrum ceremonies including standups, refinements, and retros.
                                </li>
                                <li>
                                    Wrote unit tests for frontend and backend using Jest, Fluent Assertions, and xUnit.
                                </li>                               
                            </ul>
                        </div>

                        <div className="p-6">
                            <h4 className="text-lg bg-cyan-900/30 rounded-full text-center"> Software Developer I at Lytho, Inc. (Nov 2021 - May 2024)</h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                                <li>
                                    Co-led a major epic that enables users to create and share Shared Custom Views for tables, lists, 
                                    Gantt charts, etc. across multiple work item types in a project management Workflow app. This 
                                    included work in our database, frontend, and backend repositories.
                                </li>
                                <li>
                                    Co-led a large-scale package upgrade for our applications' custom CSS repository.
                                </li>
                                <li>
                                    Developed frontend CSS and backend logic for custom color selection, from a defined set, across 
                                    five different work item types.
                                </li>
                                <li>
                                    Collaborated with a senior developer to create a Google Calendar integration for the Workflow app 
                                    using Redux.
                                </li>
                                <li>
                                    Wrote unit tests for frontend using Jest.
                                </li>
                                <li>
                                    Participated in Agile/Scrum ceremonies including standups, refinements, and retros.
                                </li>
                                <li>
                                    Participated in pull request reviews on GitHub, created bug and task tickets in Jira, performed
                                    QA on team members’ tickets when necessary, and took on bug tickets, all to help ensure our 
                                    team met our sprint goals.
                                </li>
                            </ul>
                        </div>

                        <div className="p-6">
                            <h4 className="text-lg bg-cyan-900/30 rounded-full text-center"> Front-End Developer at Tactiq (formerly DSD Partners) (Aug 2021 - Nov 2021)</h4>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                                <li>
                                    Conducted GitHub pull request reviews and performed QA on team member tickets to help ensure 
                                    sprint goals were met.
                                </li>
                                <li>
                                    Assisted in maintaining, enhancing, and debugging the frontend of the company’s Direct Store 
                                    Delivery (DSD) application.
                                </li>
                                <li>
                                    Collaborated with cross-functional teams, including designers and product managers, and backend 
                                    developers to help retail customers improve their sales through faster delivery of depleting stock.
                                </li>
                            </ul>
                        </div>                                                        
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                        <li>
                            <strong> Certificate - Full-Stack Coding Boot Camp</strong> at UNC Chapel Hill
                        </li>
                        <li>
                            <strong> M.S. in Art and Design History</strong> at Pratt Institute
                        </li>
                        <li>
                            <strong> B.A. in Geography</strong> at UNC Chapel Hill
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};