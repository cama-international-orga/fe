/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState } from "react";
import {
    modalContainer,
    modalTitle,
    label,
    input,
    addButton,
} from "./AddCategoryDetailModal.style.css";
import { useHeaderHook } from "../hooks/useHeaderHook";
import { useModal } from "../../../contexts";

export const AddCategoryDetailModal = (props:  {
    categoryPath: string,
    categoryName: string,
}) => {
    const [categoryPath] = useState(props.categoryPath);
    const [categoryName] = useState(props.categoryName);
    const { closeAllModals } = useModal();
    const [categoryDetailName, setCategoryDetailName] = useState("");
    const { handleAddDetail } = useHeaderHook();
    //console.log(props.categoryName);
    return (
        <div className={modalContainer}>
            <div className={modalTitle}> {`${categoryName} 디테일 추가`}</div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await handleAddDetail({
                        categoryPath,
                        categoryDetailName
                    });
                    closeAllModals();
                    window.location.reload();
                }}
                style={{ width: "100%" }}
            >
                <div className={label}>카테고리 디테일 이름</div>
                <input
                    type="text"
                    placeholder="예: EURO MORTISE LOCKS"
                    className={input}
                    value={categoryDetailName}
                    onChange={(e) => setCategoryDetailName(e.target.value)}
                />
                <button className={addButton} type="submit">
                    추가
                </button>
            </form>
        </div>
    );
};
