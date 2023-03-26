// external import
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// internal import
const usersSchema = require("../../Schemas/usersSchema/usersSchema");
const Users = mongoose.model("user", usersSchema);

// router.post("/", async (req, res) => {
//   console.dir(res.headersSent)
//   try {
//     const newUser = new Users(req.body);
//     res.status(200).json({
//       result: "Account Created Successfully",
//     });
//     await newUser.save();
//     console.dir(res.headersSent)
//   } catch (err) {
//     res.status(500).json({
//       error: "There Was An Server Side Error",
//     });
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newUser = new Users(req.body);
    await newUser.save();
    res.status(200).json({
      result: "Account Created Successfully",
    });
  } catch (err) {
    console.log(err + "all user route");
    // res.status(500).json({
    //   error: "There Was An Server Side Error",
    // });
  }
});

router.get("/", async (req, res) => {
  try {
    const allUser = await Users.find({});
    res.status(200).json({
      result: allUser,
    });
  } catch (err) {
    console.log(err + "all user get route");
    // res.status(500).json({
    //   error: "There Was An Server Side Error",
    // });
  }
});

module.exports = router;
