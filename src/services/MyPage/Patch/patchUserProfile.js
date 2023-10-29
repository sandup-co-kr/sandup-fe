import axios from "axios";
import { BASE_URL } from "../../api";

const patchUserProfile = async (data) => {
  console.log(data);
  try {
    const response = await axios.patch(`${BASE_URL}/user/profile`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default patchUserProfile;
