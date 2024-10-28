import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  service: {
    type: String,
    enum: [
      "Website Development",
      "Website Design",
      "Mobile App Development",
      "Digital Marketing",
      "SEO",
      "CRM and ERP Development",
    ],
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
