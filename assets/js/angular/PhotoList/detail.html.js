<form name="myForm">
  <div class="control-group" ng-class="{error: myForm.name.$invalid}">
    <label>Name</label>
    <input type="text" name="name" ng-model="photo.name" required>
    <span ng-show="myForm.name.$error.required" class="help-inline">
        Required</span>
  </div>

  <div class="control-group" ng-class="{error: myForm.site.$invalid}">
    <label>Website</label>
    <input type="url" name="site" ng-model="photo.site" required>
    <span ng-show="myForm.site.$error.required" class="help-inline">
        Required</span>
    <span ng-show="myForm.site.$error.url" class="help-inline">
        Not a URL</span>
  </div>

  <label>Description</label>
  <textarea name="description" ng-model="photo.description"></textarea>

  <br>
  <a href="#/" class="btn">Cancel</a>
  <button ng-click="save()" ng-disabled="isClean() || myForm.$invalid"
          class="btn btn-primary">Save</button>
  <button ng-click="destroy()"
          ng-show="photo.$id" class="btn btn-danger">Delete</button>
</form>