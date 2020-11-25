import mongoose, { ConnectionOptions } from "mongoose";

function connect(): Promise<typeof mongoose> {
  const options: ConnectionOptions = {

  }

  return mongoose.connect(`${process.env['MONGO_URI']}/${process.env['MONGO_DATABASE_NAME']}`, options);
}

export default { connect };
