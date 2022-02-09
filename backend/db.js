const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.DB);

    console.log("Database connection established!");
  } catch (error) {
    console.log(error);
    console.log("Database connection error!");
  }
};
