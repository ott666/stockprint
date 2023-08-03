import { useState } from "react";
import GenerosProdutos from "../GenerosProdutos/GenerosProdutos";
import ListaProdutos from "../ListaProdutos/ListaProdutos";
import { Container } from "../Container/Container";

const ProdutoPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <>
      <Container>
        <div className="flex flex-col w-full items-center">
          <div className="">
              <GenerosProdutos
                selectedGenre={selectedGenre}
                onSelect={setSelectedGenre}
              />
            </div>
            
            
              <ListaProdutos selectedGenre={selectedGenre} />
        </div>
          
        </Container>
    </>
  );
};
export default ProdutoPage;