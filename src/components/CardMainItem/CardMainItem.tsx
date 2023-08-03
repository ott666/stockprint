import React from "react";
import Image from "next/image";


interface CardMainItemProps{
    url: any
    url2:any
    alt: string
    text: string
}

export function CardMainItem(props: CardMainItemProps){
    
    return(
        
                <div className={`flex flex-col h-[450px] w-[275px] relative rounded-full `}>
                    <Image src={props.url} fill={true} alt='bg' className="absolute z-[-1] rounded-2xl"/>
                    <h2 className="text-4xl font-sans text-center text-white font-bold mt-[25px]">{props.text}</h2>
                    <Image src={props.url2} height={450} width={275} alt={props.alt} className="absolute"/>

            </div>
    )
}