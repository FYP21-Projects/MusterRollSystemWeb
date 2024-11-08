import React from "react";
import DbAside from "./DbAside";
import DbHeader from "./DbHeader";
import DbMainPage from "./DbMainPage";
import ViewAttnd from "./ViewAttnd";
import AddEmply from "./AddEmply";
import EmplyInfo from "./EmplyInfo";
import UpdtEmply from "./UpdtEmply";
import LeaveManag from "./LeaveManag";
import KeyMetrics from "./KeyMetrics";
import { useLocation } from "react-router-dom";
import WorkplaceRecord from "./WorkplaceRecord";

function AdminDashboard() {
  const location = useLocation();
  const { username } = location.state || { username: "" };
  return (
    <>
      <DbHeader />
      <div className="flex pt-16 w-full">
        <DbAside username={username} />
      </div>
    </>
  );
}

export default AdminDashboard;
