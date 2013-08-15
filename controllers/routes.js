var photoService = require("../services/photoService");

module.exports = function(app) {
  app.get('/about', function(req, res){
    res.render("about", {layout: "mylayout", data: {name: "Logan", work: "FamilySearch"}});
  });
  app.get('/utf8', function(req, res){
    res.render("utf8", {});
  });
  app.get('/ctest', function(req, res){
    res.render("ctest", {});
  });
  app.get('/combining', function(req, res){
    res.render("combining", {});
  });
  app.get('/featured-photos', function(req, res){
    photoService.getFeaturedPhotos(req.superagent, function(artifactList) {
      console.log("rendering featured photos with list: ", artifactList);
      res.render("featured-photos", {layout: "layout-leaves", artifactList: artifactList});
    })
  });
  app.get('/:page', function(req, res){
    res.render(req.params.page, {layout: "layout-leaves", data: "my data"});
  });
  app.get('/', function(req, res){
    res.render("index", {});
  });
}