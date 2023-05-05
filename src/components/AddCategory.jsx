import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // pues por defecto, al hacer submit de un formulario, se hace refresco de la página completa.
        if (inputValue.trim().length <= 1) return;
        // salimos de onSubmit si queremos añadir algo con 0 o 1 caracter
        // onAddingCategory(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        // actualiza el array de categories usando la prop (asi se comunica entre componentes)
        setInputValue('');
        // pone en blanco la barra de busqueda

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type= "text"
                placeholder= "Buscar GIFs"
                value= {inputValue}
                onChange= {(event) => onInputChange(event)}
            />
        </form>
    )
}

// Linea 29 equivalente a onChange = {onInputChange} 