// we avoid the router file to get messy 

export const signup = async(req, res) => {
    try{
        const {fullName,username,password,confirmPassword,gender}= req.body;
    }catch{
        error
    }
}


export const login = (req, res)=>{
    console.log("loginUser");
    res.status(200).json({ message: "Login route accessed" });
}

export const logout = (req, res)=>{
    console.log("logoutUser");
    res.status(200).json({ message: "Logout route accessed" });
}