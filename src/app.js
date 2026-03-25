const express=require("express");
const app=express(); // Instance of express js application


app.use((req,res) => {
    res.send("Namaste from server") //Non rauting
});

// GIVING ROUTE 

// app.use("/test",(req,res)=>{  // "/test" -> route
//     console.log("hello from server")
// })
app.listen(3000,()=>{
    console.log(`server is successfully listening on port 3000`);
});


//  INSTALL NPM NODEMON TO Automatically restarts your server when files change