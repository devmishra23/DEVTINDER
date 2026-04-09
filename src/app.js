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




// const express=require("express");
// const app=express();

// app.use("/user",(req,res)=>{
//     res.send("hahahahahhaa");
// })
// THIS WILL ONLY HANDLE GET CALL TO /user
// app.get("/user",(req,res)=>{
//     res.send({firstName: "devashish" ,lastName:"Mishra"});
// });

//This WILL ONLY HANDLE POST CALL TO /user

// app.post("/user",(req,res)=>{
//     console.log("Save data to the database");
//     res.send("data successfully saved");
// })


// app.delete("/user",(req,res)=>{
//     console.log("Save data to the database");
//     res.send("data successfully deleted");
// })


// // THIS WILL MATCH ALL THE API CALL TO /test

// app.use("/test",(req,res)=>{
//     res.send("hell0 from the server");
// });



// app.listen(7777,()=>{
//     console.log("Server is running at port 7777 ...")
// });


// PLAYING WITH RAUTES

// const express=require("express");
// const app=express();

// app.get("/user",(req,res)=>{
//     console.log(req.query);  //Getting   QUERY PARAMS
//     res.send({FirstName:"Devashish",LastName: "Mishra"})
// })

// app.listen(7777,()=>{
//     console.log(`server is running at port 7777`);
// })




// const express=require("express");
// const app=express();

// app.get("/user",(req,res)=>{
    // console.log(req.query);  //Getting   QUERY PARAMS
    // res.send("Route handler")
    
// });

// app.listen(7777,()=>{
//     console.log(`server is running at port 7777`);
// });


// ROUTE handlers


// const express=require("express");
// const app=express();

// app.use("/user",(req,res)=>{
//     // res.send("Route handler");
//     console.log("handling routes");
//     //res.send("Response sending back");   //it is waiting for response
    
// });
// (req,res)=>{
//     res.send("2nd route handler");
// }

// app.listen(1818,()=>{
//     console.log(`server is running at http://localhost:1818`);
// })


//  In Upper code we oberserved that we cant able to handle 2nd route so the solution of this problem is using 
//  next();

//       MIDDLEWARES IN EXPRESS JS

// const express=require("express");
// const app=express();

// app.use("/user",
//     (req,res,next)=>{
//     // res.send("Route handler");
//     console.log("handling routes1");
//     //res.send("Response sending back");   //it is waiting for response...It always have to be comment out because if we uncomment this it may throw an error
//     next();
    
// },
//     (req,res,next)=>{
//     console.log("handling 2nd route");
//     //res.send("2nd route handler");
//     next();
// },
//     (req,res)=>{
//     console.log("handling 3rd route");
//     res.send("3rd route handler");
// },
//     (req,res)=>{
//     console.log("handling 4th route");
//     res.send("4th route handler");
// });

// app.listen(1818,()=>{
//     console.log(`server is running at http://localhost:1818`);
// })



//  WHY MIDDLEWARES ARE IMPORTANT IN EXPRESS JS

// Middleware is like a middle helper between the user request and the server response.
// It checks or modifies things before the final answer is sent.

