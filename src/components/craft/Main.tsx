import DynamicIsland from "./content/DynamicIsland";
import ExclusionTabs from "./content/ExclusionTabs";
import Stepper from "./content/Stepper";
import ArcTabs from "./content/ArcTabs";
import RadialSelector from "./content/RadialSelector";
import Dropdown from "./content/InlineDropdown";

export default () => (
  <main className="animate-children flex flex-col gap-y-12">
    <DynamicIsland />
    <Dropdown />
    <ExclusionTabs />
    <RadialSelector />
    <Stepper />
    <ArcTabs />
  </main>
);
