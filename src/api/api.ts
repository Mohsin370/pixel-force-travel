import Axios from "axios";
import ITrip from "../interface/Itrip";
import IExperience from "../interface/Iexperience";
import ILiving from "../interface/Iliving";
const tripApi =
  "https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json";

const expApi =
  "https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json";
const livingApi =
  "https://pfx-interview.s3.ap-southeast-2.amazonaws.com/living-style.json";

const getTrips = async (): Promise<ITrip[]> => {
  const response = await Axios.get<ITrip[]>(tripApi);
  return response.data;
};
const getExperiences = async (): Promise<IExperience> => {
  return await Axios.get(expApi);
};
const getLivingStyle = async (): Promise<ILiving> => {
  return await Axios.get(livingApi);
};

const Api = {
  getTrips,
  getExperiences,
  getLivingStyle,
};
export default Api;
