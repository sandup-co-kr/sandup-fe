import axios from "axios";
import { BASE_URL } from "../../api";

const getCommunityList = async (count) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/community?count=${count}
    `
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getCommunityList;
