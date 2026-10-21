const express = require("express")
const app = express()
app.use(express.json())

app.route("/tuple")
  .get((req, res) => {
    res.send({
        "randomTuple": [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ]
    })
  })

app.route("/triple")
  .get((req, res) => {
    res.send({
      "randomTuple": [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100)
      ]
    })
  })

app.listen(3000, () => {
  console.log("API running on port 3000.")
})