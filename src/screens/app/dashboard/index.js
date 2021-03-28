import React, { useEffect } from "react";
import AuthStore from "../../../stores/AuthStore";
import { DashboardLayout } from "../shared/layout";

export function DashboardScreen() {
  useEffect(() => {
    console.log(AuthStore.get);
  });
  return (
    <div>
      <DashboardLayout title="Dashboard">
        <div>This page is for widgets</div>
      </DashboardLayout>
    </div>
  );
}
