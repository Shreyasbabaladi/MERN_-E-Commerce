exports.signup = (req, res) => {
    console.log("REQ BODY", req.body)
  res.json({
    message: "sigup route works",
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "signout",
  });
};
