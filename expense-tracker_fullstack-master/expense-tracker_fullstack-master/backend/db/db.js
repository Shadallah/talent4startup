const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.mongos_url)
        console.log('server is running on port :3001')
    } catch (error) {
        console.log(' Connection Failed');
    }
}

module.exports = {db}