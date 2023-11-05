"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';



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
        {
            name: "Javascript",
            img: "javascript.svg"
        },
        {
            name: "Tailwind css",
            img: "tailwindcss.svg"
        },
        {
            name: "Tensorflow",
            img: "tensorflow.svg"
        },
        {
            name: "Github",
            img: "github.svg"
        },
        {
            name: "Gitlab",
            img: "gitlab.svg"
        },
        {
            name: "Android Studio",
            img: "android-studio.svg"
        },
        {
            name: "Bootstrap",
            img: "bootstrap.svg"
        },
        {
            name: "Figma",
            img: "figma.svg"
        },
        {
            name: "Git",
            img: "git.svg"
        },
    ]
    
    return(
        <div className=" w-full py-8 relative flex justify-center items-center">
            <div className="container bg-white w-full pt-8 px-8 rounded-2xl flex flex-col items-center">
                <h2 className="font-bold text-white text-4xl text-center uppercase py-2 px-4 w-fit bg-secondary rounded-xl -mt-16">Technology Stack</h2>
                {/* Running */}
                <Swiper
                    slidesPerView={8}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                      }}
                    modules={[Autoplay, Pagination]}
                    className="w-full mt-8"
                >
                    {TechStackData.map((data,index)=>{
                        return(
                            <SwiperSlide key={index} className="w-[96px] h-[102px]">
                                <Image
                                    src ={`/assets/techStack/${data.img}`}
                                    alt={data.name}
                                    width={96}
                                    height={96}
                                    className="pb-12" />
                            </SwiperSlide>
                        )
                    })}
                    

                </Swiper>
                {/* <div className="mx-8 mt-8 flex gap-10 w-full">
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

                </div> */}

            </div>
        </div>
    )
}

export default TechStack;