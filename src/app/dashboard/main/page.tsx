import { WidgetsGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="ml-2 mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion General</span>
      <WidgetsGrid />

    </div>
  );
}