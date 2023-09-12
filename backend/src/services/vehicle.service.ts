import database from "../database/database";

const getVehicle = async () => {
  const { data } = await database.getData();

  return data;
}

const createVehicle = async (name: string) => {
  const newData = await database.createData(name);

  return newData;
}

export default { getVehicle, createVehicle };