/**
 *  상품 정렬 모달
 *  @author 홍규진
 */

import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useModal } from "../../../contexts";
import {
  modalContainer,
  modalTitle,
  infoContainer,
  infoLabel,
  addButton,
  cancelButton,
  buttonContainer,
  sortContainer,
  sortItem,
  sortItemContent,
  sortItemImage,
  sortItemName,
  dragHandle,
  infoLabelDetail,
} from "./ProductSortModal.style.css";
import { postProductsSort } from "../../../apis/products/products";
import { toast } from "sonner";
import { ProductsSort, CategoryProduct } from "../../../apis/products/type";

export interface ProductSortModalProps {
  products: CategoryProduct[];
}

// 정렬 가능한 아이템 컴포넌트
const SortableItem = ({
  product,
  index,
}: {
  product: CategoryProduct;
  index: number;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `product-${product.productsId}-${index}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={sortItem}>
      <div
        {...attributes}
        {...listeners}
        className={sortItemContent}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div className={dragHandle}>⋮⋮</div>
        <img
          src={product.productsImage}
          alt={product.productsName}
          className={sortItemImage}
        />
        <span className={sortItemName}>{product.productsName}</span>
        <span className={sortItemName}>{product.companyName}</span>
      </div>
    </div>
  );
};

const ProductSortModal = ({ products = [] }: ProductSortModalProps) => {
  const { closeAllModals } = useModal();
  const [sortedProducts, setSortedProducts] = useState<CategoryProduct[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (Array.isArray(products)) {
      setSortedProducts([...products]);
    } else {
      setSortedProducts([]);
    }
  }, [products]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id === over.id) {
      console.log("Same position, no change needed");
      return;
    }

    setSortedProducts((items) => {
      const oldIndex = items.findIndex(
        (_, index) =>
          `product-${items[index].productsId}-${index}` === active.id
      );
      const newIndex = items.findIndex(
        (_, index) => `product-${items[index].productsId}-${index}` === over.id
      );

      if (oldIndex === -1 || newIndex === -1) {
        console.log("Could not find items to reorder");
        return items;
      }

      const newItems = arrayMove(items, oldIndex, newIndex);
      console.log(
        "New order:",
        newItems.map((item) => item.productsName)
      );
      return newItems;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 정렬된 순서에 따라 productWeight를 설정
    const updateSortWeights = sortedProducts.map((product, index) => ({
      productId: product.productsId,
      productWeight: index + 1, // 1부터 시작하는 가중치
    }));

    const sortProducts: ProductsSort = {
      updateSortWeights,
    };

    try {
      await postProductsSort(sortProducts);
      toast.success("상품 정렬이 완료되었습니다.");
      closeAllModals();
      // 페이지 새로고침으로 변경사항 반영
      window.location.reload();
    } catch (error) {
      console.error("정렬 저장 실패:", error);
      toast.error("정렬 저장에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    closeAllModals();
  };

  return (
    <div className={modalContainer}>
      <h2 className={modalTitle}>상품 정렬</h2>
      <form onSubmit={handleSubmit}>
        <div className={infoContainer}>
          <label className={infoLabel}>
            드래그를 통해 상품의 정렬 순서를 변경해주세요.
          </label>
          <label className={infoLabelDetail}></label>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className={sortContainer}>
            <SortableContext
              items={sortedProducts.map(
                (_, index) =>
                  `product-${sortedProducts[index].productsId}-${index}`
              )}
              strategy={verticalListSortingStrategy}
            >
              <div
                style={{
                  minHeight: "200px",
                  backgroundColor: "#f7f8fa",
                  borderRadius: "10px",
                  padding: "8px",
                }}
              >
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((product, index) => (
                    <SortableItem
                      key={`product-${product.productsId}-${index}`}
                      product={product}
                      index={index}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "40px 20px",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    정렬할 상품이 없습니다.
                  </div>
                )}
              </div>
            </SortableContext>
          </div>
        </DndContext>

        <div className={buttonContainer}>
          <button type="button" className={cancelButton} onClick={handleCancel}>
            취소
          </button>
          <button type="submit" className={addButton}>
            적용
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSortModal;
