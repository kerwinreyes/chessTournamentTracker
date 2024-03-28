import mongoose from 'mongoose';
const { Schema, model, Document } = mongoose;
export interface UserAdminInterface extends Document{
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    status: string;
    createdAt: Date;
    updatedAt?: Date
}
const usersAdminSchema = new Schema<UserAdminInterface | null>({
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
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
    updatedAt: Date,
})

const Admin = model('users_admin', usersAdminSchema);

export default Admin;