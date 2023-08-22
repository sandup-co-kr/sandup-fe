import axios from "axios";
import { BASE_URL } from "../../api";

const login = async (data) => {
  try {
    const response = await axios.get(`${BASE_URL}/login`, {
      params: {
        id: data.id,
        pw: data.pw,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default login;
