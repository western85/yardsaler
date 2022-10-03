import React, { useState } from "react";
import axios from "axios";

function CreateYardsale() {
  const [input, setInput] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newYardsale = {
      address: input.address,
      city: input.city,
      state: input.state,
      zip: input.zip,
      date: input.date,
    };

    setInput({ address: "", city: "", state: "", zip: "", date: "" });
    axios.post("http://localhost:3001/create", newYardsale);
    console.log("congratulations, idiot- You posted this to atlas:", input);
  };

  //   axios({
  //     method: "post",
  //     url: "http://localhost:3001/create",
  //     newYardsale: {
  //       address: input.address,
  //       city: input.city,
  //       state: input.state,
  //       zip: input.zip,
  //       date: input.date,
  //     },
  //   });
  // };

  return (
    <div className="container">
      <h1>Create Yardsale</h1>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="address"
            value={input.address}
            className="form-control"
            placeholder="Address"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="city"
            value={input.city}
            className="form-control"
            placeholder="City"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="state"
            value={input.state}
            className="form-control"
            placeholder="State"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="zip"
            value={input.zip}
            className="form-control"
            placeholder="Zip"
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="date"
            value={input.date}
            className="form-control"
            placeholder="Date"
          ></input>
        </div>
        <button onClick={handleSubmit} className="btn btn-large btn-info">
          Post Yardsale
        </button>
      </form>
    </div>
  );
}

export default CreateYardsale;
