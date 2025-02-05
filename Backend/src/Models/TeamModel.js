import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    designation: {
        type: String,
        minlength: [8, "Designation must be at least 8 characters long"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TeamMember = mongoose.model("Team", dataSchema);

export default TeamMember;
