import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SettingsLayout from "./settings/pages/SettingsLayout";
import ShoeStoreHome from "./store/ShoeStoreHome";

import GeneralSettings from "./settings/pages/GeneralSettings";
import AccountSettings from "./settings/pages/AccountSettings";
import AppearanceSettings from "./settings/pages/AppearanceSettings";
import BillingSettings from "./settings/pages/BillingSettings";
import DeveloperSettings from "./settings/pages/DeveloperSettings";
import AdvancedSettings from "./settings/pages/AdvancedSettings";
import IntegrationsSettings from "./settings/pages/IntegrationsSettings";
import LocalizationSettings from "./settings/pages/LocalizationSettings";
import NotificationSettings from "./settings/pages/NotificationSettings";
import PrivacySettings from "./settings/pages/PrivacySettings";
import SecuritySettings from "./settings/pages/SecuritySettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Storefront */}
        <Route path="/" element={<ShoeStoreHome />} />

        {/* Settings Layout */}
        <Route path="/settings" element={<SettingsLayout />}>

          <Route path="general" element={<GeneralSettings />} />
          <Route path="account" element={<AccountSettings />} />
          <Route path="appearance" element={<AppearanceSettings />} />
          <Route path="billing" element={<BillingSettings />} />
          <Route path="developer" element={<DeveloperSettings />} />
          <Route path="advanced" element={<AdvancedSettings />} />
          <Route path="integrations" element={<IntegrationsSettings />} />
          <Route path="localization" element={<LocalizationSettings />} />
          <Route path="notifications" element={<NotificationSettings />} />
          <Route path="privacy" element={<PrivacySettings />} />
          <Route path="security" element={<SecuritySettings />} />

        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
