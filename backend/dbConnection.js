const mongoose =  require('mongoose');

const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/Mern-Todo" , {
            usenewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb ;