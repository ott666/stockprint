import { Container } from "../Container/Container"
export function SectionHero(){
    return (
        <section className="relative w-full h-screen pt-28 overflow-hidden">     
                <video autoPlay muted loop className="absolute z-[-2] min-w-full min-h-full">
                    <source src={'video/video.mp4'} />
                </video>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[-3] bg-img_bg_hero bg-no-repeat bg-center bg-cover"></div>
            <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-primary-blue z-[-1]">

            </div>
            <Container>
                
                <div className="flex flex-col h-[85vh] justify-center max-w-[35%]">
                    <h1>
                    Foco no que importa
                    </h1>
                    <p>
                    Há mais de 17 anos, a Stockprint é líder no mercado de identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
                    </p>
                    <button>
                        <span>Saiba mais</span>
                    </button>
                </div>

            </Container>
            
        </section>
    )
}

