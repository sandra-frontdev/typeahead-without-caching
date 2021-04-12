import axios from "axios";

let fruits = {};
let fruitName;

const getFruits = async () => {
  const proxyUrl = "https://salty-ridge-10349.herokuapp.com/";
  const apiUrl = "https://www.fruityvice.com/api/fruit/all";
  try {
    const response = await axios.get(proxyUrl + apiUrl);
    fruits = response.data;
    fruitName = fruits.map((fruit) => fruit.name);

    return fruitName;
  } catch (error) {
    console.log("no fruits", error);
  }
};

export { getFruits };
