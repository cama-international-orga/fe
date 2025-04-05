// ModalPortal.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "./ModalContexts";

const ModalPortal: React.FC = () => {
  const { modals, closeModal } = useModal();
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 모달 컨테이너 요소 생성 또는 가져오기
    let element = document.getElementById("modal-root");
    if (!element) {
      element = document.createElement("div");
      element.id = "modal-root";
      document.body.appendChild(element);
    }
    setPortalElement(element);

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (element && element.parentNode && element.childElementCount === 0) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (!portalElement) return null;

  return (
    <>
      {modals.map(({ id, component: ModalComponent, props }) =>
        createPortal(
          <div key={id} className="modal-wrapper">
            <div className="modal-backdrop" onClick={() => closeModal(id)} />
            <div className="modal-content">
              <ModalComponent {...props} />
            </div>
          </div>,
          portalElement
        )
      )}
    </>
  );
};

export default ModalPortal;
