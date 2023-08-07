import Logo from '@/assets/img/logo.svg'
import { ItemMenu } from '../ItemMenu/ItemMenu'
import { Container } from '../Container/Container'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'




export function Header(){
    const navLinks =
[
    {link:'/', nome:'Home'},
    {link:'/servicos', nome:'Servicos'},
    {link:'/produtos', nome:'Produtos'},
    {link:'/contato', nome:'Contato'},

]
    return(
        <header className='fixed z-10 flex items-center w-full h-28 bg-primaryBlue font-sans'>
            <Container>
                <div className='flex items-center gap-14 justify-between w-full'>
                    <Link href={'/'}>
                    <Image 
                        src={Logo}
                        alt={'Logo'}
                        className='max-w-[225px]'
                    />
                    </Link>
                    
                    <div className='flex items-center gap-12'>
                        <ul className='flex gap-4 text-primaryWhite font-bold'>
                            {navLinks.map((link, index)=>(
                                <li key={index}><Link href={link.link}>
                                        {link.nome}
                                    </Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

            </Container>
                    
        </header>
    )
}