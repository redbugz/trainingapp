<button ng-click="tryAgain()" class="btn btn-primary">Try Again</button>
<div class="row-fluid">
  <ul class="thumbnails">
    <li class="span4" ng-repeat="item in artifacts">
      <div class="thumbnail">
        <img src="{{item.thumbUrl}}" alt="{{item.title}}" style="width: 200px;" />
        <div class="caption">
          <h3>{{item.title}}</h3>
          <p>{{item.description || item.slug}}
          <p><button ng-click="add(item)" class="btn btn-primary">Interesting!</button></p>
        </div>
      </div>
    </li>
  </ul>
</div>