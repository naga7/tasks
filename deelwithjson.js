const fs = require("fs")
class Dealwithjson {
    static writejsondata=(filename,data)=>{
        console.log(JSON.stringify(data))
        fs.writeFileSync(filename,JSON.stringify(data))
        }
        static readjsondata =(filename)=>{
            let result
            try{ result=JSON.parse(fs.readFileSync(filename))
                if(!Array.isArray(result)) throw new Erro ("not an array ")

            }catch{
                    result=[]
            }
            return result
        }
    }
module.exports=Dealwithjson