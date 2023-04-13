const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
 
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));
 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");
}
 
const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});
 
const Article = mongoose.model("Article", articleSchema);
 
app.get("/articles", function(req,res){
    async function getResults() {
        try {
          const results = await Article.find();
          res.send(results);
        } catch (err) {
          res.send(err);
        }
      }
      
      getResults();
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});