import Axios from "axios";

//Get everything from the database

export async function getEmission() {
  console.log("Inside Axios");
  Axios.get("https://b796ft1jk4.execute-api.eu-west-1.amazonaws.com/prod").then(
    (response) => {
      console.log(response.data.payload);
      console.log(response.data);
    }
  );
}
