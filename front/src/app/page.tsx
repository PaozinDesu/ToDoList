import TaskViewModel from "@/viewModels/taskViewModel";
import MainHeader from "../components/header";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] w-full">
      <MainHeader />
      <NavBar />
      <TaskViewModel />
    </div>
  );
}
