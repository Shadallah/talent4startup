const mongoose = require('mongoose')

const schoolSchema = mongoose.Schema({


    sectionId:{
        type: String,
        require: true
    },
    
    faculty:{

        type: String,
        require: true
    },

    department:{
        type: String,
        require: true
    },

    numberOfStaff:{
        type: Number,
        require: true
    },

    blockNumber:{
        type: String,
        require: true
    }

    },

    {
        timestamps: true
    }
);

//export const School = mongoose.model('schoollog', schoolSchema);

const School = mongoose.model('schoolog', schoolSchema);
module.exports = School;