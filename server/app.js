// const express = require("express");
// const path = require("path");

// const app = express();

// app.set("port", process.env.PORT || 8050);


// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

// app.listen(app.get("port"), () => {
//   console.log(app.get("port"), "번 포트에서 대기중..");
// });

const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 8050);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.post('/api/data', (req, res) => {
  console.log(app.get('port'), '번 포트에서 data 호출...');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중..');
});
