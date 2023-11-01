import Image from "next/image";

function TechStack() {
    const TechStackData =[
        {
            name: "Typescript",
            img: "typescript.svg"
        },
        {
            name: "React",
            img: "react.svg"
        },
        {
            name: "Next js",
            img: "nextjs.svg"
        },
        {
            name: "Svelte",
            img: "svelte.svg"
        },
        {
            name: "Kotlin",
            img: "kotlin.svg"
        },
    ]
    
    return(
        <div className="bg-dark w-full py-8 relative flex justify-center items-center">
            <div className="container bg-white w-full py-8 px-8 rounded-2xl flex flex-col items-center">
                <h2 className="font-bold text-white text-4xl text-center uppercase py-2 px-4 w-fit bg-secondary rounded-xl -mt-16">Technology Stack</h2>
                {/* Running */}
                <div className="mx-8 mt-8 flex gap-12 w-full">
                    {TechStackData.map((data,index)=>{
                        return(
                            <Image
                            key={index}
                            src ={`/assets/techstack/${data.img}`}
                            alt={data.name}
                            width={96}
                            height={96} />
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default TechStack;