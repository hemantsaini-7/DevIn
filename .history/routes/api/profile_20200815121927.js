const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//@route GET api/profile/me
//@desc Getting current user profile
//@access Private

router.get("/", auth, async (req, res) => {});
module.exports = router;
