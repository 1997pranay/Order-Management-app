const mongoose = require("mongoose");

const dbUrl = process.env.DATABASE_URL;


// Mongoose Connect
(async() => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
})();