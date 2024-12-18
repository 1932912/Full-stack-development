import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  var type = "It's a Weekday";
  var adv = "It's time to work hard!!";
  if (day === 0 || day === 6) {
    type = "It's a Weekend";
    adv = "It's tyime to enjoy!!";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
