import fs from 'fs';
import axios from 'axios';
import config from 'configs/config';

export default async function downloadSchema() {
  const fileName = 'schema.json';
  const path = 'swagger.json';

  const res = await axios.get(config.baseUrl + path);

  fs.writeFileSync(fileName, JSON.stringify(res.data));
}
