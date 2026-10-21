const express = require("express")
const app = express()
app.use(express.json())

app.route("/tuple")
  .get((req, res) => {
    res.send({
        "randomTuple": [
            Math.random(),
            Math.random()
        ]
    })
  })

app.listen(3000, () => {
  console.log("API running on port 3000.")
})