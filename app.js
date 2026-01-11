const express = require("express");
 
const app = express();
app.use(function(_, _, next){
     
    console.log("Middleware 1");
    next();
});
app.use("/about", function(_, response){
     
    console.log("About Middleware");
    response.send("About Middleware");
});
 
app.get("/", function(_, response){
    console.log("Route /");
    response.send("Hello");
});
app.listen(3000);