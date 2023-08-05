import React from 'react'
import Image from 'next/image'




const Breadcrumb = (props:any) => {
    return (
        <>
        
    <div className='w-screen h-[60vh] pt-[112px] flex items-center justify-center relative'>
    <Image 
        width={1920}
        height={1080}
        alt='bg'
        className='absolute z-[-1] h-auto bg-cover'
        src={`/${props.produto.pseudo}/${props.produto.pseudo}1.png`} 
        />
        
        <h1 className='text-white text-4xl'>{` ${props.produto.genre}/ ${props.produto.pseudo}`}</h1>
    </div>
    </>
  )
}

export default Breadcrumb