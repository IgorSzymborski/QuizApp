const URL = "https://opentdb.com/api.php?amount=10";

fetch(URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("err", err));
