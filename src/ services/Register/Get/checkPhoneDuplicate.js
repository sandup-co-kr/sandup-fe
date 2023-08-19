import axios from "axios";
import { BASE_URL } from "../../api";

const checkPhoneDuplicate = async (data) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/checkPhone`, {
      params: {
        phone: data,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default checkPhoneDuplicate;
