import { useMutation } from "react-query";
import convertHtml from "../../ services/Magazine/Post/convertHtml";

const useConvertHtmlMutation = (setHtml) =>
  useMutation(convertHtml, {
    onSuccess: (res) => {
      console.log("Mutation success:", res);
      setHtml(res[0]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

export default useConvertHtmlMutation;
