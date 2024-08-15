import { useState } from "react";
import Form from "./Components/Form"
import Card from './Components/Card';
function App() {
  const [animals, setAnimals] = useState([]);
  const [showForm, setShowForm] = useState(true);  

  const handleFormSubmit = (newAnimal) => {
    setAnimals([...animals, newAnimal]);
    setShowForm(false);  // Oculta formulario
  };

  const handleNewAnimal = () => {
    setShowForm(true);  // Muestra el formulario para registrar un nuevo animal
  };

  return (
    <div className="App">
      <h1>Registro de Animales</h1>
      <img src="https://certifiedhumanelatino.org/wp-content/uploads/2017/11/CERTIFIED-HUMANE_Post-blog.png" alt="Imagen animales" />
      {showForm ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <>
          <button onClick={handleNewAnimal}>Registrar nuevo animal</button>
        </>
      )}
      <div className="animal-list">
        {animals.map((animal, index) => (
          <Card key={index} animal={animal} />
        ))}
      </div>
    </div>
  );

}

export default App;