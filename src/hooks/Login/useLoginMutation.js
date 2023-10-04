import { useMutation } from "react-query";
import login from "../../services/Login/Get/login";

const useLoginMutation = () =>
  useMutation(login, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
      localStorage.setItem("phone", res?.phone_no || "");
      localStorage.setItem("name", res?.name || "");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default useLoginMutation;
