import Axios from "axios";

function Leauge() {
  async function getEmission() {
    console.log("Inside Axios");
    Axios.get(
      "https://b796ft1jk4.execute-api.eu-west-1.amazonaws.com/prod"
    ).then((response) => {
      //console.log(response.data.payload);
      console.log(response.data.Items);
    });
  }

  return (
    <div className="App">
      <button onClick={getEmission}>League Table</button>
      <br></br>
    </div>
  );
}

export default Leauge;
