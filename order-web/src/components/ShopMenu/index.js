import CategoryItems from "../CategoryItems";
import MenuCategory from "../MenuCategory";

const ShopMenu = () => {
  return (
    <div>
      <div className="flex items-start relative min-h-screen px-14 pt-8">
        <div className="w-[320px] pr-5 sticky top-0 left-0">
          <MenuCategory />
        </div>
        <div className="flex-1">
          <CategoryItems />
        </div>
      </div>
    </div>
  );
};

export default ShopMenu;
