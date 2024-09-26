import React from "react";
import DbAside from "./DbAside";
import DbHeader from "./DbHeader";
import DbMainPage from "./DbMainPage";
import ViewAttnd from "./ViewAttnd";
import AddEmply from "./AddEmply";
import EmplyInfo from "./EmplyInfo";
import UpdtEmply from "./UpdtEmply";
import LeaveManag from "./LeaveManag";

function AdminDashboard() {
  return (
    <>
      <DbHeader />
      <DbAside />
      {/* <DbMainPage />
      <ViewAttnd />
      <AddEmply />
      <EmplyInfo />
      <UpdtEmply /> */}
      {/* <LeaveManag /> */}
    </>
  );
}

export default AdminDashboard;
