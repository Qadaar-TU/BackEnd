import { useState, useEffect } from "react";

const Todolist = () => {
  const [daten, setData] = useState([]);

  //kommunikation zwischen backend und frontend ____hier kommt alles an vom backend
  useEffect(() => {
    fetch("http://localhost:5500/api/todo")
      .then((res) => res.json()) //erhaltene datei als json umwandeln/anzeigen
      .then((döner) => {
        //den json von oben benennen
        setData(döner);
        console.log(döner);
      });
  }, []); //bei einem leeren dependency array, gebe ich dem
  // useEffect vor sobald die komponente geladen wird, dann
  // einmal den effekt ausführen
  // dann nie wieder

  return (
    <div>
      <h2>meine Liste</h2>
      {daten.map((todo, index) => (
        <div key={index}>
          <h4>{todo.text}</h4>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
