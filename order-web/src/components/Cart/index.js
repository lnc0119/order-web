import { BackpackIcon } from "@radix-ui/react-icons";

const Cart = () => {
  return (
    <div>
      <div className="bg-black text-slate-100 rounded-3xl px-4 text-sm py-3 cursor-3xl flex items-center gap-3
      hover:opacity-80 transition-opacity">
        <BackpackIcon />
        購物車 <div>0</div>
      </div>
    </div>
  );
};

export default Cart;
