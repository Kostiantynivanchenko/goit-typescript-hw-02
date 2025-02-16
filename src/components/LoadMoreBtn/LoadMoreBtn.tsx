import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onChangePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onChangePage }) => {
  return (
    <button className={s.btnLoad} onClick={onChangePage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
