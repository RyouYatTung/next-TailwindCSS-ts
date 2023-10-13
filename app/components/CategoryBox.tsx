import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  label: string;
  description: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  description,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
  }, []);
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }`}
    >
      {/* <Icon size={26} /> */}
      <div>{label}</div>
    </div>
  );
};

export default CategoryBox;
