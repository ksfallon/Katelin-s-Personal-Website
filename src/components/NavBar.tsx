import { useEffect, type FC } from "react"

interface NavBarProps {
// Prop to pass state value
menuOpen : boolean
// Prop to pass state setter
setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: FC<NavBarProps> = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

 return (
 <nav className="fixed top-0  w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
    <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white"> 
                Katelin<span className="text-purple-500">.Fallon</span>
            </a>

            <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
            onClick={() => setMenuOpen((prev) => !prev)}>
                {/* this for the mobile view */}                
                &#9776;
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {/* this is the desktop menu */}
                <a href="#home" className="text-grey-300 hove:text-white transition-colors">
                    {""}Home
                </a>
                <a href="#experience" className="text-grey-300 hove:text-white transition-colors">
                    {""}Experience
                </a>
                <a href="#skills" className="text-grey-300 hove:text-white transition-colors">
                    {""}Skills
                </a>
                <a href="#education" className="text-grey-300 hove:text-white transition-colors">
                    {""}Education
                </a>
                <a href="#projects" className="text-grey-300 hove:text-white transition-colors">
                    {""}Projects
                </a>
                <a href="#contact" className="text-grey-300 hove:text-white transition-colors">
                    {""}Contact
                </a>
            </div>
        </div>
    </div>
 </nav>
)
}