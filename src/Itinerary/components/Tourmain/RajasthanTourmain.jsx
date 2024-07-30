
import LeftRajasthan from "../Left/LeftRajasthan.jsx";
import RightSide from "../Common/RightSide.jsx";
import a from "../../styles/Tourmain.module.css";

export default function RajasthanTourmain() {
  return (
    <>
      <div className={a.tourmain}>
        <LeftRajasthan />
        <RightSide
          standard_cut={48150}
          standard_current={34399}

          deluxe_cut={55998}
          deluxe_current={39999}

          super_deluxe_cut={73900}
          super_deluxe_current={52799}
        />
      </div>
    </>
  );
}
