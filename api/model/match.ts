import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const matchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    playerOneID: {
        type: String,
        required: true
    },
    playerTwoID: {
        type: String,
        required: true
    },
    playerOneName: {
        type: String,
        required: true
    },
    playerTwoName: {
        type: String,
        required: true
    },
    winner: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
    updatedAt: Date,
    playerOneSignIn: {
        type: Boolean,
        required: false
    },
    playerTwoSignIn: {
        type: Boolean,
        required: false
    },
})

const Tournament = model('tournament', matchSchema);

export default Tournament;