import { useState } from "react";
import SectionCard from "../components/SectionCard";
import PasswordInput from "../components/PasswordInput";
import Toggle from "../components/Toggle";
import { useSettingsStore } from "../store/settingsStore";

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { twoFactorEnabled, setTwoFactorEnabled } = useSettingsStore();

  return (
    <div>
      <SectionCard title="Password">

        <PasswordInput
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />
        <PasswordInput
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
        />

      </SectionCard>

      <SectionCard title="Two Factor Authentication">

        <Toggle
          label="Enable 2FA"
          value={twoFactorEnabled}
          onChange={setTwoFactorEnabled}
        />

      </SectionCard>
    </div>
  );
}
