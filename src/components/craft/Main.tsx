import DynamicIsland from "./content/DynamicIsland";
import ExclusionTabs from "./content/ExclusionTabs";
import Stepper from "./content/Stepper";
import ArcTabs from "./content/ArcTabs";
import RadialSelector from "./content/RadialSelector";

export default () => (
  <main className="animate-children flex flex-col gap-y-12">
    <DynamicIsland />
    <RadialSelector />
    <ExclusionTabs />
    <Stepper />
    <ArcTabs />
  </main>
);
