import axios from "axios";
import { BASE_URL } from "../../api";

const postCommunity = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${BASE_URL}/community`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default postCommunity;
