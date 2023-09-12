import * as fs  from 'fs';
import * as path from 'path';


const PATHNAME = path.join(__dirname, 'data.json')

const getData = async () => {
  const data = fs.readFileSync(PATHNAME, 'utf-8')

  return JSON.parse(data);
}

const createData = async (name: string) => {
  const { data = [], nextID = 1 } = await getData();

  const newData = {
    data: [...data, {id: nextID ,name}],
    nextID: nextID + 1,
  }

  fs.writeFileSync(PATHNAME, JSON.stringify(newData))

  return name;
}

export default { getData, createData };
