import Login from "@/components/login/login";
import MainHeader from "@/components/mainHeader";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] w-full">
      <MainHeader />
      <Login />
    </div>
  );
}
