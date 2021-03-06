const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    console.log("Redirecting to login")
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = withAuth;
