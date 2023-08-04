"use client"

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
 
const WhatsappButton = () => {
  return (
    <motion.div 
    whileHover={{scale:1.2, x:-15, y:-30, boxShadow:'6px 9px #000000b3'}}
    transition={{duration:.4, type:'easeInOut'}}
    
    className='w-[150px] h-[150px] fixed bottom-[50px] right-[30px] z-950 rounded-full'>
        <Image src='/icons/whatsapp.svg' alt='whatsapp logo' fill={true} />
    </motion.div>
  )
}

export default WhatsappButton