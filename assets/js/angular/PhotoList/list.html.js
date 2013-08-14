<input type="text" ng-model="search" class="search-query" placeholder="Search">
<table>
  <thead>
  <tr>
    <th>Photo</th>
    <th>Description</th>
    <th><a href="#/new"><i class="icon-plus-sign"></i></a></th>
  </tr>
  </thead>
  <tbody>
  <tr ng-repeat="photo in photos | filter:search | orderBy:'name'">
    <td><a href="{{photo.site}}" target="_blank">{{photo.name}}</a></td>
    <td>{{photo.description}}</td>
    <td>
      <a href="#/edit/{{photo.$id}}"><i class="icon-pencil"></i></a>
    </td>
  </tr>
  </tbody>
</table>