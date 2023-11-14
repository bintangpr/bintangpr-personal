import { ArrowUpRightIcon, LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const CardExperience = ({monthStart, monthEnd="PRESENT", position, company, companyLink = "/", jobDesc, skill, portofolio }) =>{
    return (
        <Link className="group flex gap-x-4 justify-center mb-8 hover:bg-white/20 rounded-2xl py-4" href={companyLink} rel="noopener noreferrer" target="_blank">
            <span className="w-[160px] font-semibold text-xs mt-1">{`${monthStart} - ${monthEnd}`}</span>
            <div className="w-2/3 ">
                <h3 className="flex items-end gap-x-2 font-base text-base">
                    <span className="group-hover:text-secondary" >{`${position} · ${company}`}</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-white group-hover:text-secondary group-hover:mb-2 group-hover:ml-1 relative"/>
                </h3>
                <span className="mt-2 text-gray-300 text-sm">{jobDesc}</span>
                {portofolio &&
                <ul className="w-full mt-4 flex flex-wrap gap-x-2">
                    {portofolio.map((v,i)=>{
                        return(
                            <li key={i}>
                                <Link className="p-2 bg-primary/25 flex text-xs rounded-2xl flex gap-x-2" href={v.url}>
                                    <LinkIcon className="w-3 h-3 text-gray-300" />
                                    <span>{v.name}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
                }
                {skill && 
                <ul className="w-full flex flex-wrap gap-2 mt-4">
                    {skill.map((v,i)=>{
                        return(
                        <li className="p-2 bg-secondary/40 rounded-2xl text-xs" key={i}>
                            {v}
                        </li>
                        )
                    })}
                </ul> }
            </div>
        </Link>
    )
}

export default CardExperience;