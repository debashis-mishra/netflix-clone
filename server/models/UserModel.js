import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    likedMovies: {
        type: Array,
        default: []
    },
});

// module.exports = mongoose.model('User', userSchema);
export const User = mongoose.model('User', userSchema);

export default User;