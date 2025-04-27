const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/Listing.js");

MONGODB_URL="mongodb://127.0.0.1:27017/TravoNest";
main().then(()=>{
    console.log("connected to DB");
})
.catch(err=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGODB_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner:"67fa1abbb7b60048df038c37"}));
    await Listing.insertMany(initData.data);
    console.log("Data initalised");
}
initDB();
