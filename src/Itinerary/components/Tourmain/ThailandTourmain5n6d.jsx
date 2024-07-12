import React from "react";
import LeftThailand from "../Left/LeftThailand5n6d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={36999}
          standard_current={29999}
          deluxe_cut={39999}
          super_deluxe_cut={45999}
          deluxe_current={32999}
          super_deluxe_current={37999}
        />
      </div>
    </>
  );
}
