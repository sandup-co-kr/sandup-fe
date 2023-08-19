import axios from "axios";
import { BASE_URL } from "../../api";

const checkIdDuplicate = async (data) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/checkId`, {
      params: {
        id: data,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default checkIdDuplicate;
