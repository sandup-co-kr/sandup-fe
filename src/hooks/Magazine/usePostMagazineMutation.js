import { useMutation } from "react-query";
import postMagazine from "../../services/Magazine/Post/postMagazine";

const usePostMagazineMutation = () =>
  useMutation(postMagazine, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default usePostMagazineMutation;
