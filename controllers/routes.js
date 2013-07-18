module.exports = function(app) {
  app.get('/utf8', function(req, res){
    res.render("utf8", {});
  });
  app.get('/ctest', function(req, res){
    res.render("ctest", {});
  });
  app.get('/combining', function(req, res){
    res.render("combining", {});
  });
  app.get('/:page', function(req, res){
    res.render(req.params.page, {layout: "layout-leaves", data: "my data"});
  });
  app.get('/', function(req, res){
    res.render("index", {});
  });
}