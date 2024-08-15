
const Card = ({ animal }) => {
    const { name, type, breed } = animal;

    return (
        <div className="card">
            <h2>Información del Animal</h2>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Tipo:</strong> {type}</p>
            <p><strong>Raza:</strong> {breed}</p>         
        </div>
    )
}

export default Card