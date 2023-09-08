const Item = ({ data }) => {
  return (
    <div className="mb-1 p-4 hover:shadow-xl transition-shadow cursor-pointer">
      <div className="flex items-center overflow-hidden aspect-video">
        <img src={data.image} alt="" />
      </div>
      <div className="py-2 text-stone-950">
        <div>{data.title}</div>
        <div className="text-sm opacity-70">${data.price}</div>
        {data.rate && data.votes && (
          <div
            className="bg-gray-100 text-black px-2 text-xs 
      py-2 rounded-2xl  flex items-center gap-1"
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Thumb up</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 3v6h5.5c1.4 0 2.5 1.1 2.5 2.5v3l-2.7 5.8c-.5 1-1.5 1.7-2.7 1.7H7V10l4.5-10h.5c1.7 0 3 1.3 3 3ZM2 10h3v12H2V10Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 3v6h5.5c1.4 0 2.5 1.1 2.5 2.5v3l-2.7 5.8c-.5 1-1.5 1.7-2.7 1.7H7V10l4.5-10h.5c1.7 0 3 1.3 3 3ZM2 10h3v12H2V10Z"
                fill="currentColor"
              ></path>
            </svg>
            {data.rate}%({data.votes})
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
