import React from "react";
import Image from "next/image";

interface CardProductProps{
    urlbg:any
    urlproduct:any
    altproduct:string
}

export function CardProduct(props: CardProductProps){
    console.log(props)
    return (
        <div className={`flex justify-center items-center min-w-[400px] h-[300px] relative` }>
            
            <Image src={props.urlbg} fill={true} alt={'bg'} className="absolute z-[-1] bg-cover"/>
            
            <Image src={props.urlproduct} width={250} height={200} alt={props.altproduct} />
        </div>
    )
}