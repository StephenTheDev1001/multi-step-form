import { useState } from "react";
import PlanCard from "./PlanCard";
import { UserInfoTypes } from "../../CustomTypes";

// imported images
import arcadeSvg from "../../assets/images/icon-arcade.svg";
import advancedSvg from "../../assets/images/icon-advanced.svg";
import proSvg from "../../assets/images/icon-pro.svg";
interface SelectPlanFormProps {
  setUserInfo: any;
  userInfo: UserInfoTypes;
}

const SelectPlanForm = (props: SelectPlanFormProps) => {
  return (
    <section>
      <div className="form-control">
        <PlanCard
          planSvg={arcadeSvg}
          title="Arcade"
          monthlyPrice={9}
          appLvlProps={props}
        />
        <PlanCard
          planSvg={advancedSvg}
          title="Advanced"
          monthlyPrice={19}
          appLvlProps={props}
        />
        <PlanCard
          planSvg={proSvg}
          title="Pro"
          monthlyPrice={29}
          appLvlProps={props}
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex justify-center">
          <span className="label-text">Monthly</span>
          <input type="checkbox" className="toggle" />
          <span className="label-text">Yearly</span>
        </label>
      </div>
    </section>
  );
};

export default SelectPlanForm;
