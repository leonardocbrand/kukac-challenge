import * as fs  from 'fs';
import * as path from 'path';


const PATHNAME = path.join(__dirname, 'data.json')

const getData = async () => {
  const data = fs.readFileSync(PATHNAME, 'utf-8')

  return JSON.parse(data);
}

const createData = async <T>(vehicle: T, vehicleType: string) => {
  const { data = [], nextID = 1 } = await getData();

  const newVehicle = {
    id: nextID,
    vehicleType,
    ...vehicle,
  }

  const newData = {
    data: [...data, newVehicle],
    nextID: nextID + 1,
  }

  fs.writeFileSync(PATHNAME, JSON.stringify(newData))

  return newVehicle;
}

export default { getData, createData };
