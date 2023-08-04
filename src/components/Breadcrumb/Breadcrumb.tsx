import React from 'react'
import Produtoo from '@/data/products.json'


interface breadcrumbProps{
    title:object
}


const Breadcrumb = (props: breadcrumbProps) => {
    return (
        <>
        {console.log(Produtoo, 'aquiiiiiii')}
    <div className='w-screen h-[60vh] pt-[112px] bg-img_bg_hero bg-cover bg-fixed bg-center flex items-center justify-center'>
        <h1 className='text-white text-4xl'>{`${props.title}`}</h1>
    </div>
    </>
  )
}

export default Breadcrumb