import { ElementType } from "react";

export default function SideMenuButton({
  buttonName,
  Icon,
  active,
}: {
  buttonName: string;
  Icon: ElementType;
  active: boolean;
}) {
  return (
    <>
      <div
        className={`${
          active ? "bg-green-1 text-off-white-2" : "bg-off-white-2 text-black"
        } rounded-md h-[50px] flex items-center`}
      >
        <Icon className="ml-5 mr-2" />
        <h1 className="select-none">{buttonName}</h1>
      </div>
    </>
  );
}
