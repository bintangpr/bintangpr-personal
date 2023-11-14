import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import CardExperience from "../Card/CardExperience";

const Experience = () =>{
    return(
        <>
            <div className="w-full relative flex justify-center my-12">
                <div className="container flex justify-between">
                    <div className="flex flex-col gap-y-4">
                        <div className="group flex gap-x-2 h-fit items-center">
                            <span className="w-8 h-0 border border-white group-hover:w-12"/>
                            <h2 className="text-white text-sm text-center font-bold">Experience</h2>
                        </div>
                        <div className="group flex gap-x-2 h-fit items-center">
                            <span className="w-8 h-0 border border-white group-hover:w-12"/>
                            <h2 className="text-white text-sm text-center font-bold">Works</h2>
                        </div>
                        <div className="group flex gap-x-2 h-fit items-center">
                            <span className="w-8 h-0 border border-white group-hover:w-12"/>
                            <h2 className="text-white text-sm text-center font-bold">Experience</h2>
                        </div>
                    </div>
                    
                    <div className="w-1/2 text-[#fff] flex-col gap-y-4 justify-center">
                        {/* Card */}
                        <CardExperience 
                        monthStart="OCT 2023"
                        position="Freelance Frontend Developer"
                        company={"Rakamin Academy"}
                        companyLink={"https://www.rakamin.com/"}
                        jobDesc={"Working with other developer in Learning Development Team, together handling Rakamin Academy course and exam platform, and handling registration and exam web application for one of our client company"}
                        skill={["Vite","Typescript","Styled Component"]}
                        />

                        <CardExperience 
                        monthStart="OCT 2023"
                        position="Part-time Frontend Developer"
                        company={"Softease Studio"}
                        companyLink={"https://www.linkedin.com/company/softease-studio/"}
                        jobDesc={"Working with other developer in Learning Development Team, together handling Rakamin Academy course and exam platform, and handling registration and exam web application for one of our client company"}
                        skill={["Next js","Typescript","Styled Component"]}
                        />

                        <CardExperience 
                        monthStart="AGS 2023"
                        position="Freelance Web Developer"
                        company={"Self Employed"}
                        companyLink={"https://www.digifylabz.com/"}
                        jobDesc={"Working with other developer in Learning Development Team, together handling Rakamin Academy course and exam platform, and handling registration and exam web application for one of our client company"}
                        skill={["Next JS","Vite","Typescript","Javascript", "Tailwind CSS","Styled Component", "Figma"]}
                        />

                        <CardExperience 
                        monthStart="JAN 2023"
                        monthEnd="AGS 2023"
                        position="Frontend Developer Intern"
                        company={"Indonesia Crypto Network"}
                        companyLink={"https://indonesiacrypto.network/"}
                        jobDesc={"Working with other developer in Learning Development Team, together handling Rakamin Academy course and exam platform, and handling registration and exam web application for one of our client company"}
                        skill={["Next JS","Javascript","Wordpress","Tailwind CSS","Vercel"]}
                        portofolio={[
                            {
                                "name": "Coinvestasi",
                                "url": "https://coinvestasi.com",
                                
                            },
                            {
                                "name": "Coinfest Asia 2023",
                                "url": "https://coinfest.asia/2023",
                                
                            },
                        ]}
                        />  
                    </div>

                </div>

            </div>
        </>
    )
}

export default Experience;