const express = require("express");
const router = express.Router();

//@route GET api/auth
//@desc Testing
//@access Public

router.get("/", (req, res) => {
  res.send("auth ROUTE");
});
module.exports = router;