require("dotenv").config();

const express = require("express");
const app = express();

const accountingRouter = require("./routes/accounting")
const dataRouter = require("./routes/data")
const errorRouter = require("./routes/error")
const indexRouter = require("./routes/index")
const marketingRouter = require("./routes/marketing")

app.use("/", indexRouter);
app.use("/accounting", accountingRouter);
app.use("/marketing", marketingRouter);
app.use("/data", dataRouter);
app.use("*", errorRouter)


app.listen(process.env.HTTP_PORT, () => {
    console.log("App online");
});

