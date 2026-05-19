import { useState } from "react";
import {useModal} from "../../../contexts";
import {
    modalContainer,
    modalTitle,
    label,
    input,
    addButton,
} from "./SendQnaModal.style.css";
import {useHeaderHook} from "../hooks/useHeaderHook.ts";
export const SendQnaModal = () => {
    const { closeAllModals } = useModal();
    const [userMail, setUserMail] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userCompany, setUserCompany] = useState("");
    const [mailTitle, setMailTitle] = useState("");
    const [mailContent, setMailContent] = useState("");
    const { handleQna } = useHeaderHook();
    return (
        <div className={modalContainer}>
            <div className={modalTitle}> Q&A </div>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await handleQna({
                    userMail,
                    userPhoneNumber,
                    userCompany,
                    mailTitle,
                    mailContent
                    //내용들
                });
                closeAllModals();
                window.location.reload();
            }}
                  style={{width: "100%"}}
            >
                <div className={label}>문의자 메일</div>
                <input
                    type="text"
                    placeholder="예: cama"
                    className={input}
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)}
                />

                <div className={label}>문의자 전화번호</div>
                <input
                    type="text"
                    placeholder="예: cama"
                    className={input}
                    value={userPhoneNumber}
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                />

                <div className={label}>소속</div>
                <input
                    type="text"
                    placeholder="예: cama"
                    className={input}
                    value={userCompany}
                    onChange={(e) => setUserCompany(e.target.value)}
                />

                <div className={label}>문의 제목</div>
                <input
                    type="text"
                    placeholder="예: cama"
                    className={input}
                    value={mailTitle}
                    onChange={(e) => setMailTitle(e.target.value)}
                />

                <div className={label}>문의 내용</div>
                <input
                    type="text"
                    placeholder="예: cama"
                    className={input}
                    value={mailContent}
                    onChange={(e) => setMailContent(e.target.value)}
                />
                <button className={addButton} type="submit">
                    전송
                </button>
            </form>
        </div>
    );
};