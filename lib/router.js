exports = module.exports = router;


function router(options) {
  return function(req, res, next) {
    console.log(req.originalUrl);
    if (/^\/api\//.test(req.path)) {
      var path = req.path.slice(4);
      next();
      return;

    }
    //TODO: return view
    next()
  }
}
