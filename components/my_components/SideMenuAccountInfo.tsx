import { EllipsisVertical } from "lucide-react";

export default function SideMenuAccountInfo({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <>
      <div className="w-full h-[120px] select-none">
        <div className="flex justify-center items-center h-full">
          <div className="bg-green-1 w-[55px] h-[55px] rounded-full mr-3"></div>
          <div>
            <h1 className="text-md select-none">{name}</h1>
            <h1 className="text-sm select-none">{email}</h1>
          </div>
          <EllipsisVertical className="text-black" />
        </div>
      </div>
    </>
  );
}
