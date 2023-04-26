import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['AC Milan']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                //enviando la funcion de añadir categoria  como prop
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }


        </>
    )
}
