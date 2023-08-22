import axios from "axios";
import { BASE_URL } from "../../api";

const getMagazineListRecommend = async (count) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/magazine/recommend?count=${count}
    `
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default getMagazineListRecommend;
