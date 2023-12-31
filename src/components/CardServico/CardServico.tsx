import React from 'react'
import Image from 'next/image'

interface CardServicoProps{
    title:string
    text:string
    icon:string
}

const CardServico = (props: CardServicoProps) => {
  return (
    <div className='w-[49%] h-[300px] rounded-3xl text-white bg-primaryBlue flex align-center font-sans'>
        <Image className='ml-[25px]'
        src={props.icon}
        alt='icon'
        width={100}
        height={30}/>
        <div className='flex flex-col pt-[25px] h-full pl-[50px] pr-[30px]'>
            <h2 className='text-3xl font-semibold pb-[15px]'>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default CardServico