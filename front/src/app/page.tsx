import Image from "next/image";
import MainHeader from "../components/header";
import NavBar from "../components/navBar";
import Tasks from "@/components/tasks";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <NavBar />
      <Tasks />
    </div>
  );
}
