import React from "react";
import Image from "next/image";
import {AnimatePresence, animate, easeInOut, easeOut, motion} from "framer-motion"


interface CardMainItemProps{
    url: any
    url2:any
    alt: string
    text: string
}
const divVariant ={
    inicio:{},
    hover:{}
}

const bgVariant ={
    inicio:{
        
    },
    hover:{
        x:30,
        y:30,
        rotateZ:30,
        rotateX: -40,
        rotateY: -225,
        scale:.9,        
          
    }
    
}

const textoVariant ={
    inicio:{},
    hover:{
        backgroundColor:'#064FA0',
        borderRadius:[0,30,],
        boxShadow:'5px 5px #000000b3',
        y:[0,-30,-50],
        x:[0,50,50],
        rotateX:[0,180,180],
        rotateY:[0,-150,-150],
        rotateZ:[0,170,170]
    },
    
    
}

const produtoVariant ={
    inicio:{},
    hover:{
        scale:1.3,
        y:-20,
        rotateZ:15

    }
}   

export function CardMainItem(props: CardMainItemProps){

    return(

                <motion.div
                variants={divVariant}
                whileHover='hover'
                initial='inicio'
                className={`flex flex-col h-[450px] w-[275px] relative rounded-full`}>
                    
                    <motion.div
                    transition={{duration:.8, type:'easeInOut'}}
                    variants={bgVariant}
                    className={`flex flex-col h-[450px] w-[275px] absolute rounded-full`}>
                        <Image src={props.url} fill={true} alt='bg' className="absolute z-[-1] rounded-2xl"/>

                    </motion.div>
                    <motion.div variants={textoVariant}
                    transition={{duration:.8, type:'easeInOut'}}
                    >
                    <h2 className="text-4xl font-sans text-center text-white font-bold mt-[10px] pb-3"> 

                        {props.text}
                    </h2>

                    </motion.div>
                    
                    <motion.div className="absolute top-0 left-0 right-0 bottom-0"
                    variants={produtoVariant}
                    transition={{duration:.7, type:'easeInOut'}}
                    >
                        <Image src={props.url2} height={450} width={275} alt={props.alt} className="absolute"/>
                    </motion.div>    

            </motion.div>
    )
}