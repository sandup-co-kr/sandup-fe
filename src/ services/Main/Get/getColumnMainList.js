import axios from "axios";
import { BASE_URL } from "../../api";

const getColumnMainList = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/column/main
    `
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getColumnMainList;
