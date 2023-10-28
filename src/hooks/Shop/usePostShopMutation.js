import { useMutation } from "react-query";
import postShop from "../../services/Shop/Post/postShop";

const usePostShopMutation = () =>
  useMutation(postShop, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default usePostShopMutation;
