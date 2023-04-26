import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//un hook no es más que una funcion por lo que funciona como tal
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);  
        setIsLoading(false);
    }

    //useEffect es un hook que se utiliza para renderizar una sola vez efectos secundarios
    useEffect(() => {
        getImages();   
    }, []);



    return{
        images,
        isLoading
    }
}
