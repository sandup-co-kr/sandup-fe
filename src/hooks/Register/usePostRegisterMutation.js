import { useMutation } from "react-query";
import postRegister from "../../services/Register/Post/postRegister";

const usePostRegisterMutation = () =>
  useMutation(postRegister, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default usePostRegisterMutation;
