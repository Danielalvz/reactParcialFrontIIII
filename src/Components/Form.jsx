import React, { useState } from 'react'
import Message from './Message';

const Form = ({onSubmit}) => {
    const [animal, setAnimal] = useState({
        name: '',
        type: '',
        breed: ''
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeName = (event) => {
        console.log(event.target.value);
        setAnimal({ ...animal, name: event.target.value });
    }

    const handleChangeType = (event) => {
        console.log(event.target.value);
        setAnimal({ ...animal, type: event.target.value });
    }

    const handleChangeBreed = (event) => {
        console.log(event.target.value);
        setAnimal({ ...animal, breed: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (animal.name.trim().length > 2 &&
            animal.type.trim().length > 3 &&
            animal.breed.trim().length > 3) {
            setError(false);
            onSubmit(animal);
            setShow(true);
            setAnimal({ name: '', type: '', breed: '' });
        } else {
            setError(true);
        }
    }

    const reset = () => {
        setAnimal({
            name: '',
            type: '',
            breed: ''
        });
    }

    return (
        <>
            {show ? (
                <Message animal={animal} />
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre mascota</label>
                        <input type="text" value={animal.name} onChange={handleChangeName} />

                        <label>Tipo de animal</label>
                        <input type="text" value={animal.type} onChange={handleChangeType} />

                        <label>Raza</label>
                        <input type="text" value={animal.breed} onChange={handleChangeBreed} />

                        <button>Enviar</button>
                    </form>
                    <button onClick={reset}>Limpiar datos</button>
                </>
            )}

            {error && <h4 style={{ color: "red" }}>Por favor verifique su información</h4>}
        </>
    )
}

export default Form