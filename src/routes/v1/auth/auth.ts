import Express from "express";
import mongoose from "mongoose";
import { UserModel } from "../../../models";
const router = Express.Router();

router.post("/register", async (req, res) => {
  try {
    console.log(process.env.CONNECTION_STRING);
    if (process.env.CONNECTION_STRING) {
      mongoose
        .connect(process.env.CONNECTION_STRING)
        .then(() => {
          console.log("Connected to MongoDB");
        })
        .catch((e) => {
          
          console.log("Couldn't connect to MongoDB");
        });
    }
    console.log("connected");
    // const myUser = new UserModel({
    //   email: "asd@defa.co",
    //   name: "asd",
    //   avatar: "sad",
    // });
    // await myUser.save();

    res.send("WOW REGISTER");
  } catch (e) {
    console.error(e);
    res.status(500).send("ooh an error");
  } finally {
  }
});
export let ab = "asd";
export const setAb = (newVal: string) => {
  ab = newVal;
};
export default router;
export { router as authRouter };
