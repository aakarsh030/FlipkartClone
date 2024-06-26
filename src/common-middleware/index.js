const jwt=require('jsonwebtoken');
exports.requireSignin = (req, res, next) => {
  if(req.headers.authorization )
  {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  }
  else{
    return res.status(400).json({message:"authorization required"});
  }
  // jwt.decode()
  next();
};

exports.userMiddleware = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.status(400).json({ message: 'User access denied' });
  }

  next();
};

exports.adminMiddleware = (req, res, next) => {
  // console.log("req.user:", req.user);

  if (req.user.role !== 'admin') {
    return res.status(400).json({ message: 'Admin access denied' });
  }

  next();
};

