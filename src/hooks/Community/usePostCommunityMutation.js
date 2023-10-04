import { useMutation } from "react-query";
import postCommunity from "../../services/Community/Post/postCommunity";

const usePostCommunityMutation = () =>
  useMutation(postCommunity, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default usePostCommunityMutation;
