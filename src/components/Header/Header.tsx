import Logo from '@/assets/img/logo.svg'
import { ItemMenu } from '../ItemMenu/ItemMenu'
import { Container } from '../Container/Container'

import Image from 'next/image'


export function Header(){
    return(
        <header className='fixed z-10 flex items-center w-full h-28 bg-primaryBlue'>
            <Container>
                <div className='flex items-center gap-14 justify-between w-full'>
                    <Image 
                        src={Logo}
                        alt={'Logo'}
                        className='max-w-[225px]'
                    />
                    <div className='flex items-center gap-12'>
                        <ul className='flex gap-4 text-primaryWhite font-bold'>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>
                                <ItemMenu 
                                name='Produtos'/>
                            </li>
                            <li>Servicos</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                </div>

            </Container>
                    
        </header>
    )
}