"use client";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import UserInfoForm from "@/components/UserInfoForm/UserInfoForm";
import SelectPlanForm from "@/components/SelectPlanForm/SelectPlanForm";
import AddonsForm from "@/components/AddonsForm/AddonsForm";
import ConfirmForm from "@/components/ConfirmForm/ConfirmForm";

export default function Home() {
  const [userInfo, setUserInfo] = useState({
    count: 1,
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    online_services: false,
    larger_storage: false,
    customizable_profile: false,
    yearly: false,
  });

  return (
    <main>
      <div className="container">
        <ProgressBar count={userInfo.count} />
        {userInfo.count === 1 && (
          <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
        )}
        {userInfo.count === 2 && (
          <SelectPlanForm userInfo={userInfo} setUserInfo={setUserInfo} />
        )}
        {userInfo.count === 3 && (
          <AddonsForm userInfo={userInfo} setUserInfo={setUserInfo} />
        )}
        {userInfo.count === 4 && (
          <ConfirmForm userInfo={userInfo} setUserInfo={setUserInfo} />
        )}
      </div>
    </main>
  );
}
