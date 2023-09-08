import Item from "../Item";
const CategoryItems = () => {
  const drinksItems = [
    {
      image: "/images/items/1.jpeg",
      title: "紅龍鮮奶茶",
      price: 75.0,
      rate: 98,
      votes: 139,
    },
    {
      image: "/images/items/2.jpeg",
      title: "珍珠鮮奶茶",
      price: 85.0,
      rate: 99,
      votes: 45,
    },
    {
      image: "/images/items/3.jpeg",
      title: "鮮奶綠茶",
      price: 75.0,
      rate: 99,
      votes: 45,
    },
    {
      image: "/images/items/4.jpeg",
      title: "鼎極鮮奶茶",
      price: 75.0,
      rate: 97,
      votes: 23,
    },
    {
      image: "/images/items/5.jpeg",
      title: "仙草凍鮮奶茶",
      price: 75.0,
      rate: 95,
      votes: 180,
    },
    {
      image: "/images/items/6.jpeg",
      title: "黃金多多",
      price: 70.0,
    },
    {
      image: "/images/items/7.jpeg",
      title: "鐵觀音鮮奶茶",
      price: 75.0,
      rate: 99,
      votes: 450,
    },
    {
      image: "/images/items/8.jpeg",
      title: "上宇林紅茶",
      price: 45.0,
      rate: 97,
      votes: 99,
    },
    {
      image: "/images/items/9.jpeg",
      title: "冬瓜茶",
      price: 45.0,
    },
    {
      image: "/images/items/10.jpeg",
      title: "檸檬紅茶",
      price: 45.0,
    },
    {
      image: "/images/items/11.jpeg",
      title: "冬瓜鮮奶茶",
      price: 85.0,
    },
    {
      image: "/images/items/12.jpeg",
      title: "三窨花綠茶",
      price: 45.0,
      rate: 99,
      votes: 45,
    },
    {
      image: "/images/items/13.jpeg",
      title: "脆梅綠茶",
      price: 70.0,
    },
    {
      image: "/images/items/14.jpeg",
      title: "冰淇淋紅茶",
      price: 65.0,
    },
  ];

  return (
    <div className="grid grid-cols-4">
      {drinksItems.map((item, index) => (
        <Item data={item} key={`${item.title}-${index}`} />
      ))}
    </div>
  );
};

export default CategoryItems;
