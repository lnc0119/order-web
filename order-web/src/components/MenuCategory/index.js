const MenuCategory = () => {
  const drinkItems = [
    "Featured items",
    "人氣精選",
    "頂級茶道系列",
    "濃郁雪浮系列",
    "養生熱飲系列【季節限定】",
    "純天然鮮乳系列",
    "高山冷泡茶【限量供應】",
    "口感鮮茶系列",
    "塑膠提袋",
  ];
  return (
    <div className="max-h-screen overflow-auto no-scrollbar">
      <div className="pb-20 ">
        <div className="mb-1 underline font-bold text-stone-950">最熱門</div>
        {drinkItems.map((item, index) => {
          return (
            <div
              key={index}
              className="text-gray-850 py-2 cursor-pointer
            text-slate-500 hover:text-slate-900 transition-opacity"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
