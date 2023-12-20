import { User } from '../models/UserModel.js';

const addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies: [...user.likedMovies, data],
                    },
                    { new: true }
                );
            } else {
                return res.json({ message: "Movie Already Added" });
            }
        } else {
            await User.create({ email, likedMovies: [data] });
        }
        return res.json({ message: "Movie Added Successfully" });
    } catch (err) {
        return res.json({ message: "Error Adding Movie" });
    }
};

const getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await user.findOne({ email: email });
        if (user) {
            res.json({ msg: "success", movies: user.likedMovies });
        } else {
            return res.json({ message: "User Not Found" });
        }
    } catch (error) {
        return res.json({ message: "Error Fetching Movies" });
    }
}

const removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            const { likedMovies } = user;
            const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);

            if (!movieIndex) {
                res.status(404).json({ message: "Movie Not Found" });
            }
            likedMovies.splice(movieIndex, 1);

            await User.findByIdAndUpdate(
                user._id,
                {
                    likedMovies
                },
                { new: true }
            );
            return res.json({ message: "Movie Deleted Successfully",movies:likedMovies });
        }
    } catch (error) {
        return res.json({ message: "Error Deleting Movie" });
    }
}

export { addToLikedMovies, getLikedMovies, removeFromLikedMovies };