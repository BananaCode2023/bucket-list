// const express = require('express');
// const app = express();

// app.set('views','views');
// app.set('view engine', 'ejs');

// app.get('/', (req,res) => {
//   let today = new Date();
//   let currentDay = today.getDay();
//   var day = "";
  
//   if(currentDay == 1){
//     day = "Monday";
//   }
//   else if(currentDay == 2){
//     day = "Tuesday";
//   }
//   else if(currentDay == 3){
//     day = "Wednesday";
//   }
//   else if(currentDay == 4){
//     day = "Thursday";
//   }
//   else if(currentDay == 5){
//     day = "Friday";
//   }
//   else if (currentDay == 6){
//     day = "Saturday";
//     // res.write("<h1>Happy Weekend!</h1>");
//     // res.send();
//     } 
//   else {
//     day = "Sunday Funday!";
//     // res.write("<h1>Get up and code!</h1>");
//     // res.write("<h2>Get up and code!</h2>");
//     // res.write("<h3>Get up and code!</h3>");
//     // res.send();
//   }
//   res.render('list', {myDay: today, ourDay: day})
  
// });
 
// app.listen(3000, () => console.log("Server is running on port 3000"));

const express = require('express')
const app = express();


let items = [];

app.set('view engine', 'ejs')
app.use(express.urlencoded ({extended: true}));
app.use(express.static("public"));


app.get('/', (req,res) => {
  let today = new Date();
  
  let myDate = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

  let day = today.toLocaleDateString("en-US", myDate)

    res.render("index", {myDay: day, addedItem: items});

});

app.post('/', function(req,res){

  var item = req.body.addItem;
  items.push(item);

  
  res.redirect('/');

});


app.listen(3000, function(){
    console.log("Server started on port 3000")
});

