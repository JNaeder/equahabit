import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MyInput({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <>
      <div>
        <Label htmlFor={`${label}-id`} className="text-md">
          {label}
        </Label>
        <Input
          type={type}
          name={label}
          id={`${label}-id`}
          placeholder={placeholder}
          className="border-2 border-green-1 focus-visible:border-green-1 focus-visible:ring-green-1/50"
        />
      </div>
    </>
  );
}
