import axios from "axios";
import { BASE_URL } from "../../api";

const getCommunityListRecommend = async (count) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/community/recommend?count=${count}
    `
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getCommunityListRecommend;
