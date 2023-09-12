import getData from "../database/database";

const getVehicle = async () => {
  const data = await getData();

  return data;
}

export default { getVehicle };