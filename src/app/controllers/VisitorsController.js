(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.visitorsChartData = [ {key: 'Open', y: 10}, {key: 'Approved / Not Implemented', y: 5}, { key: 'Needs Verifier', y: 6} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: false,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#f00', '#0f0', '#00f'],
                showLabels: false,
                showLegend: false,
                title: '',
                margin: { top: -10 }
            }
        };
    }
})();
