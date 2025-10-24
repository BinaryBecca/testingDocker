import express from "express"
import fs from "fs"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  fs.readFile("data/data.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file")
      return
    }
    const parsedData = JSON.parse(data)
    const newCount = (parsedData.count || 0) + 1
    parsedData.count = newCount

    fs.writeFile("data/data.json", JSON.stringify(parsedData), (err) => {
      if (err) {
        res.status(500).send("Error writing file")
        return
      }
      res.send(parsedData)
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
