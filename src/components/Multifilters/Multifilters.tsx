import React, { useState, useEffect } from "react";
import { items } from "./Items";
import { CardProduct } from "../CardProduct/CardProduct";
import ImgCard1 from "@/assets/img/ink1000.png";

export default function Multifilters(){
    const [selectedFilters, setSelectedFilters] = useState(['ribbons']);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["impressoras", "ribbons", "limpeza", "etiquetas"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };
    return(
        <div className="flex flex-col justify-center">
                    <ul className="flex gap-[25px] bg-primary-blue py-[30px] mt-[50px] w-full rounded-full text-4xl text-white justify-around">
                        {filters.map((category, idx)=>(
                            <button
                            onClick={() => handleFilterButtonClick(category)}
                            className={`button ${
                                selectedFilters?.includes(category) ? "active text-red-500": ""
                            }`}
                            key={`filters-${idx}`}
                            >
                                {category}
                            </button>
                        ))}
                    </ul>
                    <div className="flex flex-wrap w-full gap-2 mt-[50px]">
                    {filteredItems.map((item, idx) => (
                        <CardProduct title={item.name} urlproduct={ImgCard1} altproduct={item.name} subt={item.text}/>
                    ))}
                   
                    </div>
                </div>
    )
}