import { ChevronRightIcon } from "@radix-ui/react-icons";

const Breadcrumb = () => {
  return (
    <div className="flex border-b text-stone-400 text-sm py-4 px-10">
      <div className="flex items-center mr-2">
        台灣
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        台中市
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        台中
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        惠中里
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="text-stone-800">上宇林頂級茶飲 裕民店</div>
    </div>
  );
};

export default Breadcrumb;
