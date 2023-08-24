import mongoose from "mongoose";
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: false },
});

export const UserModel = mongoose.model("User", UserSchema);
