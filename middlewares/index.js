export const auth = ( req, res, next ) => { 
  const existingUser = process.env.USER_NAME
  console.log("Existing User: ", existingUser)
  console.log("Request.body: ", req.body)
  
  
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is missing"
    });
  }
  
  const { user } = req.body;
  if (!user) {
    return res.status(400).json({
      message: "User does not exist"
    })
  }
  if (user !== existingUser) {
    return res.status(400).json({
      message: "User does not exist"
    })
  }

  console.log("Authentication Successful")
  next();
}