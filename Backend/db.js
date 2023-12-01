const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://FoodDesk:Project1@cluster0.jbixawo.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');

    const fetched_data = mongoose.connection.db.collection("find_item");
    fetched_data.find({}).toArray(function (data) {
        console.log(data);
    })


});



