import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    //esto es un custom hook (creado por mi) se utiliza "use" de manera de guia
    //permite reutilizar codigo de manera muy sencilla

    const { images, isLoading } = useFetchGifs(category);

    //----------------------------------------------------------------------

    return (
        <>
            {
                isLoading && (<h2>Cargando......</h2>)
            }
            <h3>{category}</h3>


            {/* En react se utiliza className en vez de class (reservada en JS para crear clases) */}
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem
                            key={img.id}
                            // utilizando el spread se "esparsen" todas las propiedades de image hacia el componente
                            // el componente las recibe toda y luego en sus props decidimos cuales utilizar
                            // se utiliza fundamentalmeny¡te cuando couando hay muchas propiedes
                            {...img}
                        />
                    ))
                }

            </div>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}