import Axios from "axios";
import { useState } from "react";
import wheelImage from "../../images/Group9.png";
import "./Emissions.css";

const Emission = () => {
  const [toAdd, setToAdd] = useState("");

  async function putEmission(userId, type, vehicle, emission) {
    Axios.put(
      "https://pacific-journey-78384.herokuapp.com/https://b796ft1jk4.execute-api.eu-west-1.amazonaws.com/prod",
      {
        id: Date.now().toString(),
        userId: "4",
        type: "car",
        vehicle: "small",
        emission: toAdd,
      }
    ).then((response) => {
      console.log(response);
    });
  }
  function handleChange(e) {
    console.log(e.target.value);
    setToAdd(e.target.value);
  }
  return (
    <div className="emission-body">
      <h2>Travel</h2>
      {/* <input>Distance</input>
      <input>Car</input> */}

      <input type="text" onChange={handleChange} />
      <button onClick={putEmission}>Add emission</button>
      <img className="wheel" src={wheelImage} alt={"wheel"} />
    </div>
  );
};

export default Emission;
