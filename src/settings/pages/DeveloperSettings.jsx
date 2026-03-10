import SectionCard from "../components/SectionCard";
import ApiKeyGenerator from "../components/ApiKeyGenerator";

export default function DeveloperSettings() {
  return (
    <div>
      <SectionCard title="Developer Tools">
        <ApiKeyGenerator />
      </SectionCard>
    </div>
  );
}