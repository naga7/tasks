const deal =require("./deelwithjson")
//deal.writejsondata("a.json",[1,2,3])
const yargs = require("yargs")
yargs.command(
    {
        command:"adduser",
       builder:{
            name:{ demandOption:true},
         age:{ demandOption:true},
         email:{ demandOption:true},
    },
        handler:(argv)=>{
const data =deal.readjsondata("users.json")
const userData={
    id:Date.now(),
    name:argv.name,
    email:argv.email,
    age:argv.age
}
   data.push(userData) 
    deal.writejsondata("users.json",data)      
}

    }
    )

//////////////////////////////////////////////////////////////
yargs.command({
command:"showsingle"  ,
builder:{
    id:{demandOption:true}
 
}

,
handler:(argv)=>{
    const data =deal.readjsondata("users.json")
   const find =data.find(userData =>
userData.id== argv.id
   )
 console.log( find)
 
}
})
//////////////////////////////////////////////////////////////////

yargs.command({
    command:"deleteUser"  ,
    builder:{
        id:{demandOption:true}
     
    }
    
    ,
    handler:(argv)=>{
    const user =deal.readjsondata("users.json")
  
    const requiredIndex = user.findIndex(el => {
       return el.id === argv.id
    })
    console.log(requiredIndex)
    if(requiredIndex === -1){
       return false;
    }
    user.splice(requiredIndex, 1)
   
    deal.writejsondata("users.json",user)   
    return user ;

    
 

 
}    })
//////////////////////////////////////////////////////////////////////

yargs.command({
    command:"edit"  ,
    builder:{
        id:{demandOption:true}
     
    }
    
    ,
    handler:(argv)=>{
    const user =deal.readjsondata("users.json")
    const userData={
        id:Date.now(),
        name:argv.name,
        email:argv.email,
        age:argv.age
    }
  
    const requiredIndex = user.findIndex(el => {
       return el.id === argv.id
    })
    console.log(requiredIndex)
    if(requiredIndex === -1){
       return false;
    }
    user[requiredIndex]=userData
 
    deal.writejsondata("users.json",user)  
    console.log(user) 
    return user ;
    
    
 

 
}    })


////////////////////////////////////////////////////

yargs.command({
    command:"deleteALL"  ,
   
    handler:()=>{
   

    deal.writejsondata("users.json",[])  
   
  
    
    
 
}    })







yargs.argv