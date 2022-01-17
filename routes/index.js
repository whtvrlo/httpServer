const router = require("express").Router();

router.get("/", (req, res) => {
    // Remove all query parameters that begin with "_" before sending the response
    let queries = {};
    // do something to filter queries
    for(const [key, value] of Object.entries(req.query)) {
        if (key.startsWith("_")) {
            continue; // is like break
        } else {
            queries[key] = value;
        }
    }

     res.status(200).json({query: queries})
});

module.exports = router;