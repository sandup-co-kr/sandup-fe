import axios from "axios";
import { BASE_URL } from "../../api";

const getUserInfo = async (phone) => {
  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      params: {
        phone,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getUserInfo;
