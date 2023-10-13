import Container from "../Container";
import TbBeach from "react-icons/tb";
import Giwidmill from "react-icons/gi";
import MdOutlineVilla from "react-icons/md";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach.",
  },
  {
    label: "Windmills",
    icon: Giwidmill,
    description: "This property is close to the windmills.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is close to the modern.",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;