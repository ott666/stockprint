import { Container } from "../Container/Container"
export function SectionHero(){
    
    return (
        <section className="relative w-full h-screen pt-28 overflow-hidden">     
                <video autoPlay muted loop className="absolute z-[-2] min-w-full min-h-full">
                    <source src={'video/video.mp4'} />
                </video>
 
            <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-primaryBlue z-[-1]">

            </div>
            <Container>
                
                <div className="flex flex-col h-[85vh] justify-center max-w-[34%] gap-[45px] pr-[25px]">
                    <h1 className="text-white font-sans font-bold text-5xl tracking-tighter">
                    Foco no que importa
                    </h1>
                    <span className="text-secondaryTextLight font-sans text-[20px]">
                    Há mais de 17 anos, a Stockprint é líder no mercado de identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
                    </span>
                    <button className="bg-secondaryBlue py-5 rounded-full">
                        <span className="text-3xl text-white">Saiba mais</span>
                    </button>
                </div>

            </Container>
            
        </section>
    )
}

