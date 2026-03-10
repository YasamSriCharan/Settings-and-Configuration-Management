import SectionCard from "../components/SectionCard";
import Input from "../components/Input";
import Select from "../components/Select";
import { useSettingsStore } from "../store/settingsStore";

export default function GeneralSettings() {
  const { name, email, setName, setEmail } = useSettingsStore();

  return (
    <div>
      <SectionCard title="General Information">

        <Input
          label="Full Name"
          value={name}
          onChange={setName}
        />

        <Input
          label="Email"
          value={email}
          onChange={setEmail}
        />

      </SectionCard>
    </div>
  );
}
