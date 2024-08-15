import React from 'react'

const Message = ({animal}) => {
    return (
        <>
           <h4>Tu mascota {animal.name} se registro con éxito!</h4>
           <h4>Es un animal de tipo: {animal.type} y de raza: {animal.breed}</h4>
        </>
    )
}

export default Message