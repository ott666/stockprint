"use client"

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
const WhatsappButton = () => {
  return (
    <motion.div 
    whileHover={{scale:1.2, x:-15, y:-30, boxShadow:'6px 9px #000000b3'}}
    transition={{duration:.4, type:'easeInOut'}}
    
    className='w-[150px] h-[150px] fixed bottom-[50px] right-[30px] z-950 rounded-full'>
        <Link href='https://wa.me/5516992974070?text=Ol%C3%A1.%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'>
        <Image src='/icons/whatsapp.svg' alt='whatsapp logo' fill={true} />
          </Link>
    </motion.div>
  )
}

export default WhatsappButton