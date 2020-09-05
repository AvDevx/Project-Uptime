const express = require('express')
const app = express()
const axios = require('axios')
var http = require("http")
const port = 3000

app.get('/', (req, res) => {

  http.get({ host: "www.girlpowertalk.com" }, function (res) {
    if (res.statusCode == 200 || res.statusCode == 301)
      console.log("\nwww.girlpowertalk.com Up and Running ..")
    else
      console.log("Website down");

    console.log(res.statusCode);
  });

  http.get({ host: "www.blueoceanglobaltech.com" }, function (res) {
    if (res.statusCode == 200 || res.statusCode == 301)
      console.log("\nwww.blueoceanglobaltech.com Up and Running ..")
    else
      console.log("Website down");

    console.log(res.statusCode);
  });


  http.get({ host: "www.everspire.tk" }, function (res) {
    if (res.statusCode == 200 || res.statusCode == 301)
      console.log("\nwww.everpire.tk Up and Running ..")
    else
      console.log("Website down");

    console.log(res.statusCode);
  });


  http.get({ host: "www.louislehot.com" }, function (res) {
    if (res.statusCode == 200 || res.statusCode == 301)
      console.log("\nwww.louislehot.com Up and Running ..")
    else
      console.log("Website down");

    console.log(res.statusCode);
  });
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})