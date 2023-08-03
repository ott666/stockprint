import React from 'react'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'

interface CardServicoProps{
    title:string
    text:string
}

const CardServico = (props: CardServicoProps) => {
  return (
    <div className='w-[32%] h-[115px] bg-slate-500 flex align-top'>
        <Image 
        src={ArrowDown}
        alt='icon'
        width={30}
        height={30}/>
        <div className='flex flex-col'>
            <h2>props.title</h2>
            <p>props.text</p>
        </div>
    </div>
  )
}

export default CardServico