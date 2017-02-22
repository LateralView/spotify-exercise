import template from './app-dashboard.html'

export const AppDashboardComponent = {
  controller : function (SpotifyService) {
    var ctrl = this;

    ctrl.search = function () {
      SpotifyService.search(ctrl.term)
      .then(data => {
        ctrl.result = data.albums;
      })
      .catch(data => {
      })
    }
  },
  template: template
}
