import angular from 'angular';

export class HeaderSearch {
  constructor() {
    'ngInject';
    this.restrict = 'A';
    this.scope = {
      fetchSearch: '&'
    }
  }
  link($scope, $element, $event) {
    const limit = 4;
    const handler = ($event) => {
      const search = angular.element($event.target).val();
      if (search.length >= limit) {
        $scope.fetchSearch({ search });
      } else if (search.length == 0) {
        $scope.fetchSearch();
      } 
    };
    $element.on('keyup', handler);
    $scope.$on('destroy', function(){
      $element.off('keyup', handler)
    });
  }
};
