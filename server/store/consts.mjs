import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverPath = path.parse(__dirname).dir;
const musicPath = path.join(serverPath, "music");

export { serverPath, musicPath };
