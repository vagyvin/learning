1)ng-app="store"
Attaching the application module to the page
2)ng-show="", ng-show="!"
3)ng-hide=""
4)ng-controller="StoreController as store"
Attaching a controller function to the page
5)ng-repeat="product in store.products"
Repeating a section for each item in an array

Formatting with filters
-{{data|filter:options}}
-{{'date'|date:}}

Limiting no of products/items
ng-repeat="product in store.products | limitTo:3"

Sorting products
ng-repeat="product in store.products | orderBy:'-price'" "-" descending order