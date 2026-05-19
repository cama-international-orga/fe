import {Qna} from "./type.ts";
import {publicInstance} from "../axios.ts";

export const sendQna = async (
    qna: Omit<Qna, "qnaId">,
): Promise<void> => {
    // const formData = new FormData();
    //
    // const qnaData = {
    //     qnaName : qna.qnaName,
    //     qnaDescription : qna.qnaDescription,
    // };
    //
    // const qnaBlob = new Blob([JSON.stringify(qnaData)], {
    //     type: "application/json",
    // });
    //
    // formData.append("qna", qnaBlob);

    await publicInstance.post("/users/send", qna);

}