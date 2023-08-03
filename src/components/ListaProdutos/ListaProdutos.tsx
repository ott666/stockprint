// import products
import products from "@/data/products.json";
import { CardProduct } from "../CardProduct/CardProduct";
import Link from "next/link";

type Props = {
  selectedGenre?: string;
};

const ListaProdutos = ({ selectedGenre }: Props) => {
  // Lines 9-11 if there's a selectedGenre we use the array.filter function to filter the product data
  // otherwise, return all the products.
  const filteredMoviesByGenre = selectedGenre
    ? products.filter((product) => product.genre.includes(selectedGenre))
    : products;
  return (
    <div className="p-2 flex flex-wrap gap-2 justify-between">
      {/* map through all the filtered products */}
      {filteredMoviesByGenre.map((product) => {
       
        return (
          <Link href={`/product/${product.pseudo}`} key={product.pseudo}> 
            <CardProduct 
            urlproduct={`/${product.pseudo}/${product.pseudo}1.png`} 
            altproduct={product.title}
            title={product.title}
            subt="aa"
            / >
          </Link>
        );
      })}
    </div>
  );
};
export default ListaProdutos;