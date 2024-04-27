const { User }=require("../config/db")
//const generateToken = require("../config/generateToken");
const bcrypt = require("bcrypt");

 


const Register = async (req, res) => {
    try {
      const { username, password, email, aadhar,voter} = req.body;
      console.log("Request Body:", req.body);
  
      if (!username || !password || !email ) {
        res.status(400).json({ error: "Please enter all the fields" });
        return;
      }
  
      // Check if user already exists
      const userExists = await User.findOne({ username });
  
      if (userExists) {
        res.status(400).json({ error: "Username is already taken" });
        return;
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        aadhar,
        voter,
      });
  
      // Save the user instance to the database
      const user = await newUser.save();
  
      console.log("User saved:", user);
  
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        aadhar:user.aadhar,
        voter:user.voter,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error probably" });
    }
  };



  
  const Login = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        
        if (!identifier || !password) {
          return res.status(400).json({ msg: "Identifier and password are required" });
        }

   
        let user = await User.findOne({
          
            email: identifier,
                  });
    
        // If the identifier is not an email, check if it's a username
        if (!user) {
          user = await User.findOne({
            
              username: identifier,
            
          });
        }
    
        // Check if the user with the specified email or username exists
        if (!user) {
          return res.status(404).json({ msg: "User not found" });
        }
    


        console.log(user);

        if (user && (await bcrypt.compare(password, user.password))) {
          console.log("login succesful");
          //const token= generateToken(user._id)
          //res.cookie("token", token);
          res.status(200).json({
            _id: user._id,
            username: user.username,
            //token
        });
           
        } else{
          res.status(401);
          throw new Error("Invalid Username or Password");
  
        }

         
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
      }};


  module.exports={ Register, Login}
  