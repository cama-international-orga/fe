// ModalContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";
import ModalPortal from "./ModalPortal";

// 모달 타입 정의
export interface ModalProps {
  id: string;
  component: React.ComponentType;
  props?: Record<string, unknown>;
}

// 컨텍스트 타입 정의
interface ModalContextType {
  modals: ModalProps[];
  openModal: (modal: Omit<ModalProps, "id">) => void;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<ModalProps[]>([]);

  // 모달 열기
  const openModal = ({ component, props }: Omit<ModalProps, "id">) => {
    const id = Math.random().toString(36).substring(2);
    setModals((prev) => [...prev, { id, component, props }]);
  };

  // 특정 모달 닫기
  const closeModal = (id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  // 모든 모달 닫기
  const closeAllModals = () => {
    setModals([]);
  };

  const contextValue = useMemo(
    () => ({
      modals,
      openModal,
      closeModal,
      closeAllModals,
    }),
    [modals]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalPortal />
    </ModalContext.Provider>
  );
};

// 커스텀 훅
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal은 ModalProvider 내부에서 사용해야 합니다");
  }
  return context;
};
