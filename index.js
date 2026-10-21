const express = require("express")
const app = express()
app.use(express.json())

const getRandomInt = () => Math.floor(Math.random() * 100)

app.route("/tuple")
  .get((req, res) => {
    res.send({
        "randomTuple": [
            getRandomInt(),
            getRandomInt()
        ]
    })
  })

app.route("/triple")
  .get((req, res) => {
    res.send({
      "randomTuple": [
          getRandomInt(),
          getRandomInt(),
          getRandomInt()
      ]
    })
  })

app.listen(3000, () => {
  console.log("API running on port 3000.")
})