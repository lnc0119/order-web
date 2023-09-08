import { PlusIcon } from "@radix-ui/react-icons";

const ExtraAction = () => {
  return (
    <div className="px-12 flex gap-4">
      <div className="bg-slate-100 text-gray-800 px-4 text-sm 
      py-2 rounded-3xl cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1">
        查看類似商品
        </div>
      <div className="bg-slate-100 text-gray-800 px-4 text-sm 
      py-2 rounded-3xl cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1">
        <PlusIcon />
        團購訂單
      </div>
    </div>
  );
};

export default ExtraAction;
