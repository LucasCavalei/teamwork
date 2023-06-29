const isUserAuthenticated = (req, res, next) => {
  console.log('  session ', req.session, req.user);
  if (req.user) {
    next();
  } else {
    res.status(401).send('You must login first!');
  }
};
export { isUserAuthenticated };
