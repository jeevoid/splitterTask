import bodyparser from "body-parser"

import bodyParser from "body-parser"

exports.default = app => {

app.use(
    bodyParser.json({
      limit: "50mb"
    })
  );
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000
    })
  );
}