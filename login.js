const mongoose=require('mongoose')
const loginModel=require('./models/loginModel')
let url='mongodb://127.0.0.1:27017/mongodb_demo'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
            console.log("Connected to Db")
    
            let newdata=new loginModel({id:100,Name:"Inserted by mongoose"})
    
            loginModel.insertMany(newdata)
                        .then((data)=>{
                            console.log(data)
                            mongoose.connection.close()
                        })
                        .catch((conerr)=>{
                            console.log(conerr)
                        })
                  
        })
        .catch((conerr)=>{
            console.log(conerr)
        })