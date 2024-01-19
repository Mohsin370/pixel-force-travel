import Text from "../../../components/text/text";
import search from "../../../assets/icons/search.svg";
import filterIcon from "../../../assets/icons/filterIcon.svg";
import Card from "../../../components/card/card";
import styles from "./explore.module.css";
import Tab from "../../../components/tab/tab";

/*CORS error prevent data to be fetched from the server hence using static data instead*/

const trips = [

  {
    name: "Toyko, Japan",
    image: "https://i.ibb.co/vZt1WZS/tokyo-city.jpg",
    rented_props_count: 234363,
  },
  {
    name: "Sydney, Australia",
    image: "https://i.ibb.co/mhKDThR/sydney-city.jpg",
    rented_props_count: 9124,
  },
];

const living = [
  {
    name: "Outdoor living",
    image: "https://picsum.photos/600/400.jpg",
  },
  {
    name: "Japanese housing",
    image: "https://picsum.photos/600/400.jpg",
  },
  {
    name: "Scandinavian minimalism",
    image: "https://picsum.photos/600/400.jpg",
  },
  {
    name: "Industrial loft",
    image: "https://picsum.photos/600/400.jpg",
  },
  {
    name: "French country",
    image: "https://picsum.photos/600/400.jpg",
  },
  {
    name: "Coastal beach house",
    image: "https://picsum.photos/600/400.jpg",
  },
  {
    name: "Mediterranean villa",
    image: "https://picsum.photos/600/400.jpg",
  },
];

const experiences = [
  {
    name: "Learn the culture",
    image: "https://picsum.photos/500/500.jpg",
  },
  {
    name: "Online events",
    image: "https://picsum.photos/500/500.jpg",
  },
];

function Explore() {
  return (
    <>
      <div className="">
        <div className="flex justify-center m-4">
          <Text
            icon={search}
            placeholder="Search address, city, location"
            filterIcon={filterIcon}
          />
        </div>
        <div className="min-h-vh">
          <div className={styles.content}>
            {/* trips */}

            <div className="grid grid-cols-2 gap">
              <h1 className="text-xl font-semibold">Find your next trip</h1>
              <p className="text-right font-extralight cursor-pointer primary">See all</p>
            </div>
            <div className={styles.cardContainer}>
              {trips?.map((tripItem) => {
                return (
                  <Card
                    image={tripItem.image}
                    name={tripItem.name}
                    rented_props_count={tripItem.rented_props_count}
                  />
                );
              })}
            </div>
            {/* Living */}
            <h1 className="text-xl font-semibold"> Explore by living</h1>

            <div className={styles.cardContainer}>
              {living?.map((liv) => {
                return <Card image={liv.image} name={liv.name} />;
              })}
            </div>

            {/* Discover  */}
            <h1 className="text-xl font-semibold">
              Want to discover other experiences
            </h1>

            <div className={styles.cardContainer}>
              {experiences?.map((exp) => {
                return <Card image={exp.image} name={exp.name} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <Tab active={1} />
    </>
  );
}

export default Explore;
