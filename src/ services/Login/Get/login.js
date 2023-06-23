import axios from "axios";
import { BASE_URL } from "../../api";

const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      id: data.id,
      pw: data.pw,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default login;
