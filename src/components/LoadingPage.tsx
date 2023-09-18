import React, { FC } from "react";

interface IProp {
  isLoadingPage: string;
}

const LoadingPage = ({ isLoadingPage }: IProp) => {
  return (
    <div className={`loading-web ${isLoadingPage}`}>
      <div>
        <h1>TUAN ANH</h1>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingPage;
