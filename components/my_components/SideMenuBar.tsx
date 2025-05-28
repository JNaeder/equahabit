import LogoTitle from "./LogoTitle";
import SideMenuButton from "./SideMenuButton";
import SideMenuAccountInfo from "./SideMenuAccountInfo";
import { Calendar } from "lucide-react";

export default function SideMenuBar() {
  return (
    <>
      <div className="bg-off-white-2 w-[220px] h-svh flex flex-col">
        <LogoTitle size={50} />
        <div className="flex flex-col mx-3 gap-[20px] h-full ">
          <SideMenuButton buttonName="Agenda" Icon={Calendar} active={true} />
          <SideMenuButton buttonName="Tasks" Icon={Calendar} active={false} />
          <SideMenuButton buttonName="Habits" Icon={Calendar} active={false} />
          <SideMenuButton buttonName="Stats" Icon={Calendar} active={false} />
          <SideMenuButton buttonName="History" Icon={Calendar} active={false} />
          <SideMenuButton
            buttonName="Settings"
            Icon={Calendar}
            active={false}
          />
        </div>
        <SideMenuAccountInfo name="John Naeder" email="test@gmail.com" />
      </div>
    </>
  );
}
