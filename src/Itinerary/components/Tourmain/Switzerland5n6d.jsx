import React from "react";
import LeftThailand from "../Left/LeftSwitzerland5n6d.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function Tourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftThailand />
        <RightSide
          standard_cut={127500}
          standard_current={97999}
          deluxe_cut={155500}
          super_deluxe_cut={199500}
          deluxe_current={119900}
          super_deluxe_current={149500}
        />
      </div>
    </>
  );
}
