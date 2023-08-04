import React from 'react'
import { Container } from '../Container/Container'

const Footer = () => {
  return (
    <div className='w-screen bg-primary-blue h-[40vh] text-white font-sans flex items-center'>

        <div className='flex max-w-[1246px] px-[15px] mx-auto gap-[15px] justify-between'>
            <div className='flex flex-col w-[41%] h-full '>
                <a href='#' className=' text-4xl font-bold'>Stockprint</a>
                <p className='pt-[15px]'>
                    Há mais de 17 anos, a Stockprint é líder no mercado de identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
                </p>
            </div>
            <div className='flex flex-col h-full'>
                <h4 className='text-xl font-semibold'>Links úteis</h4>
                <ul className='text-[18px]'>
                <li className='py-2'> <a href="index.html">- Home</a></li>
                <li className='py-2'> <a href="sobre.html">- Sobre</a></li>
                <li className='py-2'> <a href="servicos.html">- Serviços</a></li>
                <li className='py-2'> <a href="contato.html">- Contato</a></li>
                </ul>
            </div>
            <div className='flex flex-col h-full'>
                <h4 className='text-xl font-semibold'>Produtos</h4>
                <ul className='text-[18px]'>
                <li className='py-2'> <a href="index.html">- Impressoras</a></li>
                <li className='py-2'> <a href="sobre.html">- Ribbons</a></li>
                <li className='py-2'> <a href="servicos.html">- Limpeza</a></li>
                <li className='py-2'> <a href="contato.html">- Etiquetas</a></li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl font-semibold'>Informações de contato</h4>
                <p className='pt-2'>Rua Rangel Pestana, 547</p>
                <p className='py-0'>Ribeirão Preto, São Paulo 14030-210</p>
                <p className='pb-2'>Brasil</p>

                <p className='pt-[35px]'><strong>Phone:</strong> +16 3237-8150</p>
                <p><strong>Email:</strong> vendas2@stockprint.com.br</p>
                
            </div>

        </div>
    </div>
  )
}

export default Footer