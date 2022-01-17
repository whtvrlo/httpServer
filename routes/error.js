const router = require("express").Router(); // import from express    .router what gets stored in our Router

router.get("/", (req, res) => {
    res.status(404).send("Not Found");
});

module.exports = router; 