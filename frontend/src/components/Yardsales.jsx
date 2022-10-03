import React, { useEffect, useState } from "react";
import "./Yardsales.css";
import axios from "axios";

const Yardsales = () => {
  const [yardsales, setYardsales] = useState([
    {
      address: "",
      city: "",
      state: "",
      zip: "",
      date: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    fetch("/yardsales")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setYardsales(jsonRes));
  });

  function deleteYardsale(id) {
    axios.delete("/delete/" + id);
    alert("Yardsale deleted!");
    console.log(`Deleted yardsale with id: ${id}`);
  }

  return (
    <div className="container">
      <h1>Upcoming Yardsales</h1>
      {yardsales.map((yardsale, key) => (
        <div key={yardsale._id}>
          <span>
            {yardsale.address} {yardsale.city}, {yardsale.state} {yardsale.zip}{" "}
            {yardsale.date}
          </span>
          <button
            onClick={() => deleteYardsale(yardsale._id)}
            className="delButton"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Yardsales;
