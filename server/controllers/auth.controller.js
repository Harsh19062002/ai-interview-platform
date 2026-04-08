import genToken from "../config/token.js"
import User from "../models/user.model.js"

export const googleAuth = async (req,res) => {
    try {
        const { name, email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ name, email });
        }

        const token = await genToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ success: true, user });

    } catch (error) {
        console.log("GOOGLE AUTH ERROR:", error);
        return res.status(500).json({ message: error.message });
    }
};

export const logOut = async (req,res) => {
    try {

        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        })

        return res.status(200).json({
            message:"Logout Successfully"
        })

    } catch (error) {
        return res.status(500).json({message:`Logout error ${error}`})
    }
}