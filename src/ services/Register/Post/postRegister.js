import axios from "axios";
import { BASE_URL } from "../../api";

const postRegister = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default postRegister;
