<form name="myForm">
  <div class="control-group" ng-class="{error: myForm.name.$invalid}">
    <img src="{{photo.thumb}}"><br>
    <label>Name</label>
    <p>{{photo.name}}</p>
  </div>

  <div class="control-group" ng-class="{error: myForm.site.$invalid}">
    <label>Website</label>
    <p>{{photo.site}}</p>
  </div>

  <label>Description</label>
  <div>{{photo.description}}</div>

  <br>
  <a href="#/" class="btn">Cancel</a>
  <button ng-click="destroy()"
          ng-show="photo.$id" class="btn btn-danger">Delete</button>
</form>