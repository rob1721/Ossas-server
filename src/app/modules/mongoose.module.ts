import mongoose, { ConnectionOptions } from "mongoose";

function connect(): Promise<typeof mongoose> {
  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }

  return mongoose.connect(`${process.env['MONGO_URI']}`, options);
}

export default { connect };
