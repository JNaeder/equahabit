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
          id={`${label}-id`}
          placeholder={placeholder}
          className="border-2 border-green-1"
        />
      </div>
    </>
  );
}
