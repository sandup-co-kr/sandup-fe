import axios from "axios";
import { BASE_URL } from "../../api";

const getShopDetail = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/shop/${id}
    `
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getShopDetail;
