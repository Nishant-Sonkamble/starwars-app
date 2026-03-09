function Modal({ person, close }) {

  if (!person) return null;

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>{person.name}</h2>

        <p>Height: {person.height / 100} m</p>
        <p>Mass: {person.mass} kg</p>

        <p>
          Birth Year: {person.born < 0 
            ? `${Math.abs(person.born)} BBY` 
            : `${person.born} ABY`}
        </p>

        <h3>Homeworld</h3>
        <p>Name: {person.homeworld}</p>
        <p>Species: {person.species}</p>
        <p>Faction: {person.affiliations?.[0] || "Unknown"}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;