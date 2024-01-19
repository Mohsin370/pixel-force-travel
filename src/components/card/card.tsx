
type cardType = {
  image: string;
  name: string;
  rented_props_count?: number;
};
function Card(props: cardType) {
  return (
    <>
      <div className=" max-w-xs w-xl min-w-48	 bg-white border rounded-xl  ">
        <div className="">
          <img className="max-h-52 xl:w-52 sm:w-52  rounded-t-lg" src={props.image} loading="lazy" alt="" />
        </div>
        <div className="p-3">
          <h3 className=" text-md">{props.name}</h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.rented_props_count}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;