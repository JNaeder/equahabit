export default function LogoTitle({ size }: { size: number }) {
  return (
    <>
      <div className="text-center flex items-center justify-center space-x-4 mb-5 bg-amber-500">
        <img src="equahabit_logo_1.svg" className="select-none" width={size} />
        <h1 className="text-[20px] text-green-1 font-bold select-none">
          Equahabit
        </h1>
      </div>
    </>
  );
}
