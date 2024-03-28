import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    ncfpRating: {
        type: String,
        required: false
    },
    fideRating: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
    updatedAt: Date,
})

const User = model('users', usersSchema);

export default User;