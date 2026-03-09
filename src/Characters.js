import { useEffect, useState } from "react";
import Modal from "./Modal";
function Characters() {

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
  fetch(`https://akabab.github.io/starwars-api/api/all.json`)    .then(res => res.json())
    .then(data => {
      setPeople(data.slice((page-1)*10, page*10));      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
}, [page]);
function getSpeciesColor(species) {
  switch (species) {
    case "human":
      return "#1f3b73";
    case "droid":
      return "#555";
    case "wookiee":
      return "#6b3f1d";
    case "yoda's species":
      return "#2d6a4f";
    default:
      return "#1f1f1f";
  }
}

  if (loading) return <h2>Loading characters...</h2>;
  if (error) return <h2>Failed to fetch data</h2>;

  return (
    <div>
      <h2>Characters List</h2>

      <div className="grid">
  {people.map((person, index) => (
    <div
  className="card"
  key={index}
  onClick={() => setSelected(person)}
  style={{ backgroundColor: getSpeciesColor(person.species) }}
>     <img src={person.image} alt={person.name} />  <h3>{person.name}</h3>
    </div>
  ))}
</div>
      <br/>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
<Modal person={selected} close={() => setSelected(null)} />
    </div>
  );
}   // ← THIS WAS MISSING

export default Characters;