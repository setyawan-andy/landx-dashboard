import Sidebar from "../components/Sidebar";
import Userpage from "../components/Userpage";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Userpage />
    </div>
  );
}
