//------------------------------------------LIBRERIAS
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//------------------------------------------MODULOS
import logModule from "./modules/log.module";
import mongooseModule from "./modules/mongoose.module";
import components from "./components";

async function main() {
  const server: Express = express();
  const port: number = parseInt(process.env['PORT'] || '3000');

  server.use(express.json());
  server.use(morgan('dev'));
  server.use(cors({ origin: 'http://localhost:18001' }));
  // routes
  server.use('/api', ...components);

  // this folders for this application will be used to store public file images
  server.use('/uploads', express.static(path.resolve('uploads')));
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