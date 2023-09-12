import * as fs  from 'fs';
import * as path from 'path';

const getData = async () => {
  const pathname = path.join(__dirname, 'data.json')
  const data = fs.readFileSync(pathname, 'utf-8')

  return JSON.parse(data);
}

export default getData;