// 파일 경로와 확장자가 'ts'로 끝나므로, TypeScript 파일을 가정하여 수정합니다.


// 1. 컴포넌트 이름과 동일한 함수를 정의합니다.
// 2. props를 인수로 받을 수 있도록 합니다 (여기서는 사용하지 않지만 기본 구조에 포함).
import {sidebarBtn, sidebarBtnInactive} from "./Sidebar.style.css.ts";
import React from "react";
//import {companyBtnInactive, companyBtn} from "../../category-company/index.style.css.ts";
import {useNavigate} from "react-router-dom";

export interface ISidebarProps {
    categoryPath: string | undefined;
    categoryDetailId: string | undefined;
    categoryDetailName: string | undefined;
    isLoggedIn: boolean;
    isAll?: boolean;
    active?: boolean;
    categoryName?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({
                                             categoryDetailId,
                                             categoryPath,
                                             categoryDetailName,
                                             //isLoggedIn,
                                             active,
                                            categoryName
                                            // categoryDetailId,
                                            // categoryPath
                                         }) => {
    const navigate = useNavigate();
    // 3. 'return' 문은 함수 본문(Body) 안에 있어야 합니다.
    return (
        <>
            <button
                className={active ? sidebarBtn : sidebarBtnInactive}
                key={categoryDetailId}
                onClick={() => {
                    navigate(`/categories/${categoryPath}/detail/${categoryDetailId}/company`, {
                        state: {
                            categoryName: categoryName, categoryDetailName: categoryDetailName,
                        }
                    });
                }}
            >
                {categoryDetailName}
            </button>
        </>
    );
};

// 4. 정의한 함수를 default로 내보냅니다.
export default Sidebar;