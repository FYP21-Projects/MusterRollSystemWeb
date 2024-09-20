import React from "react";
import DbAside from "./DbAside";
import DbHeader from "./DbHeader";
import DbMainPage from "./DbMainPage";

function AdminDashboard() {
  return (
    <>
      <DbHeader />
      <DbAside />
      <DbMainPage />
    </>
  );
}

export default AdminDashboard;
