import React, { useEffect } from "react";
import AuthStore from "../../../stores/AuthStore";
import { DashboardLayout } from "../shared/layout";

export function SettingsScreen() {
  const pageSettings = {
    title: "General Settings",
    actions: [
      {
        name: "Save",
        color: "blue",
        icon: "add-icon",
        onClick: () => {
          //Save Settings
        },
      },
    ],
  };
  return (
    <div>
      <DashboardLayout
        title={pageSettings.title}
        actions={pageSettings.actions}
      >
        <div>This page for setttings site</div>
        <div>Change Favicon</div>
        <div>Change Site Logo</div>
        <div>Change Site Name</div>
      </DashboardLayout>
    </div>
  );
}
