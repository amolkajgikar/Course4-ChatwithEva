let mongoose=require('mongoose');

let url='mongodb+srv://amolkajgikar:amol123@cluster0.m0ql8.mongodb.net/socketIO?retryWrites=true&w=majority'


let dbconnection=()=>{return mongoose.connect(url).then(res=>{console.log('We are connected mongoose on cloud')}).catch(err=>{console.log(err)});
}
module.exports={dbconnection};
