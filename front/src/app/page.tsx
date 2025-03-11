import EditTask from "@/components/editTask";
import MainHeader from "../components/header";
import NavBar from "../components/navBar";
import Tasks from "@/components/tasks";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] w-full">
      <MainHeader />
      <NavBar />
      <Tasks />
      <EditTask />
    </div>
  );
}
