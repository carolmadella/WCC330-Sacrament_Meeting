require('dotenv').config()

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.CONNECTION_STRING
const dbName = process.env.DB_Name



async function connectDB() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        return client.db(dbName); 

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw error;
    } 
}

module.exports = {connectDB, ObjectId};