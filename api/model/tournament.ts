import mongoose from 'mongoose';
const { Schema, model, Document } = mongoose;
export interface TournamentDocumentInterface{
    name: string;
    type: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date
}
export interface TournamentInterface extends Document{
    name: string;
    type: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date
}
const tournamentSchema = new Schema<TournamentInterface>({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
    updatedAt: Date,
    type: {
        type: String,
        required: true
    },
})

const Tournament = model('tournament', tournamentSchema);

export default Tournament;