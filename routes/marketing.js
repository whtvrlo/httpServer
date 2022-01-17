const router = require("express").Router();

router.get("/", (req, res) => res.status(200).send("marketing")); //goodbye


module.exports = router;