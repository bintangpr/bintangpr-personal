import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className={"bg-dark w-full h-screen relative"}>
        <div className="w-screen h-screen fixed">
            <div class='stars'></div>
            <div class='twinkling'></div>
            <div class='clouds'></div>
        </div>
        
        {/* <div className="w-2/5 h-full absolute right-0">
            <div className="relative h-screen w-full">
                <img src="/assets/profile.jpg" className="absolute w-full h-full inset-0 object-cover mix-blend-luminosity"/>
            </div>
        </div> */}
        <div className="container mx-auto flex relative z-10">
            <div className="h-screen w-3/5  flex flex-col justify-center gap-y-16">
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-white font-bold text-5xl leading-[52px]">Bridging <span className="text-secondary">Dreams</span> & <span className="text-secondary">Reality</span>:<br/>{" I'm "}<span className="text-primary">Bintang Prabowo</span>,<br/> Your Software Developer</h1>
                    <p className="text-gray-300 font-medium text-2xl">
                    {"As a software developer, I'm deeply passionate about code. I specialize in crafting exceptional web and Android experiences. Every project I undertake is a blend of dedication and love"}
                    </p>
                </div>
                <div className="flex flex-col gap-y-6">
                    <span className="text-gray-300 font-medium text-2xl">Find Me</span>
                    <div className="flex gap-x-4">
                        <Link href={"https://github.com/bintangpr"} target="_blank" className="group w-16 h-16 bg-[#202328] flex justify-center items-center hover:cursor-pointer">
                             <div className="absolute w-14 h-14 bg-gray-300 rounded-full group-hover:bg-secondary ">
                            </div>
                            <img
                            src="/assets/github-mark.svg"
                            alt="linkedin Logo"
                            className="w-12 h-12 absolute z-10 bg-transparant rounded-full" />
                        </Link>
                        <Link
                        href="https://www.linkedin.com/in/bintangpr/" 
                        target="_blank"
                        className="group w-16 h-16 bg-[#202328] flex justify-center items-center relative">
                            <div className="absolute w-11 h-11 bg-gray-300 rounded-xl group-hover:bg-secondary">
                            </div>
                            <img
                            src="/assets/linkedin.svg"
                            alt="linkedin Logo"
                            className="w-12 h-12 absolute z-10" />
                        </Link>
                        <Link
                        href="https://www.instagram.com/bintangpr17" 
                        target="_blank"
                        className="group w-16 h-16 bg-[#202328] flex justify-center items-center relative">
                            <div className="absolute w-14 h-14 bg-gray-300 rounded-xl group-hover:bg-secondary">
                            </div>
                            <img
                            src="/assets/instagram.svg"
                            alt="Instagram Logo"
                            className="w-12 h-12 absolute z-10 text-gray-300 overflow-hidden " />
                        </Link>
                    </div>
                </div>
                
                
            </div>
            <div className="w-2/5 h-screen flex justify-center items-center">
                <div className="w-[500px] h-[500px] rounded-[20px] overflow-hidden">
                <Image src={"/assets/profile.jpg"}
                alt="profile"
                width={500}
                height={500}
                className="mix-blend-luminosity  " />
                </div>
        </div>

        </div>
        
    </div>
  )
}

export default HeroSection