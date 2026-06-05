const express = require("express");
const app = express();

app.get("/", (req, res) => {

res.set("Content-Type", "text/plain");

res.send(
`loadstring(game:HttpGet("https://raw.githubusercontent.com/verizonold937-oss/RexzHubGameSupport/main/RexzHubByRexz"))()`
);

});

app.listen(3000);
