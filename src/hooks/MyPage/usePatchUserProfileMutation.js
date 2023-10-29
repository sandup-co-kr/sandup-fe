import { useMutation } from "react-query";
import patchUserProfile from "../../services/MyPage/Patch/patchUserProfile";

const usePatchUserProfileMutation = () =>
  useMutation(patchUserProfile, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default usePatchUserProfileMutation;
