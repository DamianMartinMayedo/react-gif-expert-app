import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    //funcion para detectar un cambio en el input
    const onInputChange = (event) => {
        //asi obtenemos lo que el usuario está escribiendo
        setinputValue(event.target.value);
        // console.log(event.target.value);
    }

    //
    //prevenimos el evento del form y enviamos los datos al componente padre para añadir a la lista
    const onSubmit = (event) => {
        event.preventDefault();
        //evitar que el input este vacio o sea una sola letra
        if (inputValue.trim().length <= 1) return;
        //añadir a la lista de la primera manera
        // setCategories(categories => [inputValue, ...categories]);
        
        //se añade a la lista de manera más eficiente, la funcion manejadora está en el componente padre
        onNewCategory(inputValue.trim());
        //limpiar el input luego del enter
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
