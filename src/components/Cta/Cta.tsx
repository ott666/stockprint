import React from 'react'
import { Container } from '../Container/Container'

function Cta() {
  return (

    <div className="flex justify-center px-0 w-screen h-[40vh] bg-img-bg-cta bg-cover bg-center bg-fixed">
        
        <div className="flex flex-col justify-center  h-full text-center font-sans text-white max-w-[1246px] w-full ">
            <h3 className='text-[28px] pb-[10px] font-bold'>Encontre o Produto Ideal para Você! Solicite seu Orçamento Agora!</h3>
            <p className='text-[20px]  pb-[20px]'>Nossa equipe está pronta para ajudá-lo(a) a encontrar a melhor solução! Clique no botão abaixo para solicitar seu orçamento sem compromisso e descubra como podemos atender suas expectativas.</p>
            <a className="bg-primaryGreen w-[300px] self-center p-[15px] rounded-3xl text-[22px] font-bold border-2 border-white" href="#">Whatsapp</a>
        </div>
        
    </div>
  )
}

export default Cta