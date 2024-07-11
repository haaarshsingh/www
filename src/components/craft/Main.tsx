import DynamicIsland from "./content/DynamicIsland";
import ExclusionTabs from "./content/ExclusionTabs";
import Stepper from "./content/Stepper";
import ArcTabs from "./content/ArcTabs";

export default () => (
  <main className="animate-children flex flex-col gap-y-12">
    <DynamicIsland />
    <ExclusionTabs />
    <Stepper />
    <ArcTabs />
  </main>
);
