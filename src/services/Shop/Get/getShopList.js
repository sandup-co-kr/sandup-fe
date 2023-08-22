import axios from "axios";
import { BASE_URL } from "../../api";

const getShopList = async (count) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/shop?count=${count}
    `
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getShopList;
