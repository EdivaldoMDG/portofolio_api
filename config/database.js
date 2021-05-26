const mongoose = require("mongoose");
const databaseUri = process.env.MONGODB_URI;

const databaseConnection = async () => {
  try {
    await mongoose.connect(databaseUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Connected Successfuly to database");
  } catch (error) {
    console.error("Unable to connect to database");
    console.error(error);
    process.exit(1);
  }
};

module.exports = databaseConnection;