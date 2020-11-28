//------------------------------------------LIBRERIAS
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";

//------------------------------------------MODULOS
import logModule from "./modules/log.module";
import mongooseModule from "./modules/mongoose.module";
import components from "./components";

async function main() {
  const server: Express = express();
  const port: number = parseInt(process.env['PORT'] || '3000');

  server.use(express.json());
  server.use(morgan('dev'));
  server.use(cors({ origin: 'http://localhost:16001' }));
  server.use('/api', ...components);

  try {
    await mongooseModule.connect();
    logModule.success('Database connection successful');

    server.listen(port, () => {
      logModule.success(`Server listening on port ${port}`);
    });
  }
  catch (error) {
    logModule.error(`Failed database connection`);
    console.log(error);
  }
}
export default { main };