import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages(category)
    }, [])
    // dependencias ([ ... ]) vacias: el hook solo se dispara la primera vez que se crea y se construye el componente.

    return {
        images: images,
        isLoading: isLoading
    }
}

// Hook: funcion que regresa algo