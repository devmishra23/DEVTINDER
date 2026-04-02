// const express=require("express");
// const app=express(); // Instance of express js application


// app.use((req,res) => {
//     res.send("Namaste from server") //Non rauting
// });

// // GIVING ROUTE 

// // app.use("/test",(req,res)=>{  // "/test" -> route --> Anything that matches after the slash "/" this raute handler follow this
// //     console.log("hello from server")
// // })
// app.listen(3000,()=>{
//     console.log(`server is successfully listening on port 3000`);
// });


 //  INSTALL NPM NODEMON TO Automatically restarts your server when files change



// const express=require("express");
// const app=express();


// app.use("/namaste", (req,res)=>{
//         console.log("namaste from server");
//         res.send("namaste froms server");
//     } );

// app.use((req,res)=>{
//     console.log("hello mr.devashish");

    
//     //res.send("namaste jii")
// });


// app.listen(1818,()=>{
//     console.log(`server is listening at http://localhost:1818`)
// })




const express=require("express");
const app=express();


// THIS WILL ONLY HANDLE GET CALL TO /user
app.get("/user",(req,res)=>{
    res.send({firstName: "devashish" ,lastName:"Mishra"});
});

//This WILL ONLY HANDLE POST CALL TO /user

app.post("/user",(req,res)=>{
    console.log("Save data to the database");
    res.send("data successfully saved");
})


app.delete("/user",(req,res)=>{
    console.log("Save data to the database");
    res.send("data successfully deleted");
})


// THIS WILL MATCH ALL THE API CALL TO /test

app.use("/test",(req,res)=>{
    res.send("hell0 from the server");
});



app.listen(1818,()=>{
    console.log("Server is running at port 1818...")
});

