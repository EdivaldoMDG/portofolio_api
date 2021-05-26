const mongoose = require("mongoose");

const { Schema } = mongoose;



const projectSchema = new Schema(
  {
     image: String, 
     project: String, 
     url:String
  },
  { versionKey: false }
);

module.exports = mongoose.model("Project", projectSchema);