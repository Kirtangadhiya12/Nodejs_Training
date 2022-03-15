const fs = require('fs');
 fs.readFile("D:/BACANCY/Nodejs/nodejs practical-2/users.json","utf-8",(err,data)=>{
    if(err)
    {
        console.log("error",err);
    }
    // const users=JSON.parse(data)
    console.log(data);
     fs.readFile("D:/BACANCY/Nodejs/nodejs practical-2\projects.js",(err2,data2)=>{
        if(err2)
        {
            console.log("error",err2);
        }
        const projects=JSON.parse(data2);
        fs.readFile("D:\BACANCY\Nodejs\nodejs practical-2\tasks.js",(err3,data3)=>{
            if(err3)
            {
                console.log("error",err3);
            }
            const projects=JSON.parse(data3);
            
            
    }
    )

}
)
}
)

    
