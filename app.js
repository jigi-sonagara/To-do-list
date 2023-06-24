// 
const express = require("express");
const bodyparser = require("body-parser");
const date = require( __dirname + "/date.js")

const app = express();
let items =[];

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let day = date();
    res.render("list", { kindofDay: day , newListitems : items});
});

app.post("/" , function(req,res){
    let item = req.body.newitem;

    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("server is starat on 3000 port");
});