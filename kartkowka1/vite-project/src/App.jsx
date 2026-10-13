import { useState } from "react";
import zespoly from "./wariant07.js";

function Pozycja({ nazwa }) {
  return <li>{nazwa}</li>;
}

function App() {
  const [imieNazwisko, setImieNazwisko] = useState("");
  const [numer, setNumer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(imieNazwisko);

    const zespol = zespoly[Number(numer) - 1];

    if (zespol != undefined) {
      console.log(zespol);
    } else {
      console.log("Nieprawidłowy numer zespołu muzycznego");
    }
  }

  return (
    <div>
      <h2>Liczba zespołów muzycznych: {zespoly.length}</h2>

      <ol>
        {zespoly.map((zespol, index) => (
          <Pozycja key={index} nazwa={zespol} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię i Nazwisko:
            <input
              type="text"
              value={imieNazwisko}
              onChange={(event) => setImieNazwisko(event.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Numer zespołu muzycznego:
            <input
              type="number"
              value={numer}
              onChange={(event) => setNumer(event.target.value)}
            />
          </label>
        </div>

        <button type="submit">Zatwierdź wybór</button>
      </form>
    </div>
  );
}

export default App
