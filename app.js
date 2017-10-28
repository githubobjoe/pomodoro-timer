//importing and establishing the express (router) object
express = require("express")
var app = express()

//defining the index site function
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

//starting the server
var server = app.listen(3000, function() {
  console.log("Pomodoro Planner is listening on port 3000!")
})