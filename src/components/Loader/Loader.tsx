import React from "react";
import { Oval } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <Oval
        color="#f09433"
        width={80}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#bc1888"
        strokeWidth={3}
      />
    </div>
  );
};

export default Loader;
