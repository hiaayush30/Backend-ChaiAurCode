import mongoose from "mongoose"

const worksInHospitalSchema=new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    hoursSpent: {
        type: Number,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    // worksInHospital: [{
    //     name: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Hospital'
    //     },
    //     hoursSpent: {
    //         type: Number,
    //         required: true
    //     }
    // }]
    worksInHospital:[worksInHospitalSchema]
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema)