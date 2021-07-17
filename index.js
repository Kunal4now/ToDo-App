var express = require('express');
var app = express();

app.use(express.urlencoded());

app.set('view engine' , 'ejs');

var task = ["buy socks" , "practice with nodejs"];
var complete = ["Finish JQuery"];

app.post('/addtask' , (req , res) => {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});

app.post("/removetask" , (req , res) => {
    var completeTask = req.body.check;
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask) , 1);
    }
    else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.listen; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]) , 1);
        }
    }
    res.redirect("/");
})

app.get("/", function(req, res) {    
  res.render("index", { task: task, complete: complete });
});

app.listen(3000 , function() {
    console.log('Example app listening on port 3000');
});