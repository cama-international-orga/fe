import Sidebar from "../category-detail/components/Sidebar.tsx";
import {
    container,
    mainWrapper,
    contentArea,
    titleContainer,
    //cardContainer,
    //companyBar,
    addCompanyButton, productContainer, productGrid
} from "./index.style.css.ts";
import CompanyContainer from "./components/Company.tsx";
import Footer from "../../components/Footer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useCategoryCompanyHook from "./hooks/useCategoryCompanyHook.ts";
// import  {useState} from "react";
// import {useModal} from "../../contexts";
import {searchInput, searchInputWrapper, navList, sidebar} from "../category-detail/components/Sidebar.style.css.ts";
import {FaSearch} from "react-icons/fa";
import {searchIcon} from "../../components/Header/index.style.css.ts";
import {useEffect} from "react";

function CategoryCompanyPage({isLoggedIn} : {isLoggedIn: boolean}) {
    const location = useLocation();
    const categoryName = location.state?.categoryName;

    const { categoryPath, categoryDetailId } = useParams();
    const navigate = useNavigate();

    const {
        companys,
        addCompanyModalOn,
        //removeCompanyModalOn,
        sidebarCategory
    } = useCategoryCompanyHook(
        categoryPath ? categoryPath : "0",
        categoryDetailId ? categoryDetailId : "0",
        isLoggedIn ? isLoggedIn : false,
    );
    // const [categoryDetailStateName ] = useState<string>(categoryDetailName);
    // const { openModal } = useModal();

    useEffect(() => {
        // 2. id가 없거나 '0'일 때 첫 번째 카테고리로 이동(Redirect)
        if ((!categoryDetailId || categoryDetailId === "0") && sidebarCategory?.length > 0) {
            const defaultId = sidebarCategory[0].categoryDetailId;

            // 3. 변수에 직접 대입하는 게 아니라, 해당 주소로 경로를 바꿔줘야 합니다.
            navigate(`/categories/${categoryPath}/detail/${defaultId}/company`, { replace: true });
        }
    }, [categoryDetailId, sidebarCategory, navigate]);
    return (
        <>
        <div className={container}>
            <div className={mainWrapper}>
                <div className={sidebar}>
                    <div className={searchInputWrapper}>
                        <FaSearch className={searchIcon} size={16} color="#ccc" margin-right={"10px"} />
                        <input type="text" placeholder="Search" className={searchInput}/>
                    </div>
                    <div className={navList}>
                        {sidebarCategory?.map((sCategory) => (
                            <Sidebar
                                key={sCategory.categoryDetailId}
                                categoryDetailId={sCategory.categoryDetailId}
                                categoryPath={categoryPath}
                                categoryDetailName={sCategory.categoryDetailName}
                                isLoggedIn={isLoggedIn}
                                active={categoryDetailId === sCategory.categoryDetailId}
                                categoryName={categoryName}
                            />
                        ))}
                    </div>
                </div>

                <div className={contentArea}>
                    <div className={titleContainer}>{companys.categoryDetailName}</div>
                    <div className={productContainer}>
                        <div className={productGrid}>
                            {companys.companyAllLists?.map((company) => (
                                <CompanyContainer
                                    key={company.companyId}
                                    categoryDetailId={categoryDetailId ? categoryDetailId : "0"}
                                    categoryPath={categoryPath ? categoryPath : "0"}
                                    companyId={company.companyId}
                                    companyImage={company.companyImage}
                                    //compnayImage={company.}
                                    companyName={company.companyName}
                                    onClick={() => {
                                        navigate(`/categories/${categoryPath}/detail/${categoryDetailId}/company/${company.companyId}?page=0`,{
                                            state: {
                                                categoryDetailName: companys.categoryDetailName
                                            }
                                        });
                                    }}
                                    isLoggedIn={isLoggedIn}
                                    //active={undefined}
                                    //active={companyId === company.companyId}
                                />
                            ))}
                            {isLoggedIn && (
                                <button className={addCompanyButton} onClick={addCompanyModalOn}>
                                    +
                                </button>
                            )}
                        </div>
                    </div>


                </div>
            </div>

        </div>

            <Footer/>
        </>
    );
}

export default CategoryCompanyPage;