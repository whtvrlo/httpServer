const router = require("express").Router();

router.get("/", (req, res) => res.status(200).send("Accounting"));


// router.get("/:staff/", (req, res) => {
//     console.log(req.params);
//     res.status(200).json({staff: req.params.staff})
// });


router.get("/:name", (req, res) => {
    console.log(req.params);
    res.status(200).json({name: req.params.name})
});

router.get("/:name/:age/:jobtitle", (req, res) => {
    console.log(req.params);
    res.status(200).json({name: req.params.name, age: req.params.age, jobtitle: req.params.jobtitle})
});

// $url = "http://localhost/main.php?email=$email_address&event_id=$event_id";
//                                  ^ start of vars      ^next var


module.exports = router;

