import Image from "next/image"
import ArrowDown from '@/assets/icons/arrow-down.svg'

type Props = {
    name:string
}

export function ItemMenu({ name }: Props){
    return(
        <button className='flex items-center gap-3'>
            <span>{name}</span>
            <Image 
                src={ArrowDown}
                alt={'Arrow dropdown'}
                className='max-w-[20px]'
            />
        </button>
    )
}