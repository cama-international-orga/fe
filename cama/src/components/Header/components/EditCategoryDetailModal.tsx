/**
 *  카테고리 수정 모달
 *  @author 홍규진
 */

import { useState } from "react";
import {
    modalContainer,
    modalTitle,
    label,
    input,
    addButton,
} from "./EditCategoryDetailModal.style.css";
import { useHeaderHook } from "../hooks/useHeaderHook";
import { useModal } from "../../../contexts";

export const EditCategoryDetailModal = (category: {
    categoryPath: string;
    categoryName: string;
    categoryDetailId: string;
    categoryDetailName: string;
}) => {
    const { closeAllModals } = useModal();
    const [categoryName] = useState(category.categoryName);
    const [categoryPath] = useState(category.categoryPath);
    const [categoryDetailId] = useState(category.categoryDetailId);
    const [categoryDetailName, setCategoryDetailName] = useState(category.categoryDetailName);
    const { handleEditDetail } = useHeaderHook();
    console.log(categoryName + " " + categoryPath + " " + categoryDetailId + " " + categoryDetailName);

    return (
        <div className={modalContainer}>
            <div className={modalTitle}> {`${categoryName} 디테일 수정`}</div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await handleEditDetail({
                        categoryPath,
                        categoryDetailId,
                        categoryDetailName,
                    });
                    closeAllModals();
                    window.location.reload();
                }}
                style={{ width: "100%" }}
            >
                <div className={label}>카테고리 디테일 이름</div>
                <input
                    type="text"
                    placeholder={`${categoryDetailName}`}
                    className={input}
                    value={categoryDetailName}
                    onChange={(e) => setCategoryDetailName(e.target.value)}
                />

                <button className={addButton} type="submit">
                    수정
                </button>
            </form>
        </div>
    );
};
