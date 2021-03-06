var qlikObject;
var destroyableObjects = [];

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

// var config = {
//      host: 'localhost',
//      prefix: '/',
//      port: 4848,
//      isSecure: false
// };

// var appId = 'b5c165df-6761-4d0d-a950-060a0a3ccb96';
var appId = 'Executive Dashboard.qvf';

var base = window.location.origin + window.location.pathname;
var extPath = base.substr( 0, base.lastIndexOf( "/" ) );
// var extPath = '';
console.log(extPath);
require.config({
    baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
    paths: {
        'ui.router': extPath+'/bower_components/angular-ui-router/release/angular-ui-router',
        'uibootstrap': extPath+'/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        // 'uibootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min',
    },
    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    }
});

// bootstrap the app
require(["js/qlik"], function (qlik) {
    var errors = [];
    qlik.on("error", function(error){
		//error handling
		console.log('Qlik error', error);
		errors.push(error); 
		if(error.code === 16 || ["OnSessionTimedOut","OnSessionClosed"].indexOf(error.method)>-1){ 
            document.getElementById('errorModal').style.display = 'block';
            $('#errorModal').modal('show')
		}
	});
    require(["angular", 'ui.router', 'uibootstrap', "routes", 

            'home', 'oncology', 'urology', 'cardio', 'immunology', 'infectious',
           
            'topHeader',

            'chartCard', 'expandModal', 'kpiCard',

            'dataService', 'qlikService', 'currentSelectionsService', 'filterDropdownService'
    ],
        function (angular, uiRoute, uibootstrap, routes, 

            home, oncology, urology, cardio, immunology, infectious,

            topHeader, 
            
            chartCard, expandModal, kpiCard,
            
            dataService, qlikService,currentSelectionsService, filterDropdownService ) {
            app = angular.module('mashup-app', [
                'ui.router',
                'ui.bootstrap'
            ]).config(['$compileProvider',
            function( $compileProvider ) {   
              $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
              $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:application\//);
              $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|cust-scheme):/);
              $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
              $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
            }
            ]);
            
            app.config(routes);
            app.component('home',home);
            app.component('oncology',oncology);
            app.component('urology',urology);
            app.component('cardio',cardio);
            app.component('immunology',immunology);
            app.component('infectious',infectious);
            
            app.component('topHeader',topHeader);

            app.component('kpiCard', kpiCard);
            app.component('chartCard',chartCard);
            app.component('expandModal',expandModal);

            app.service('dataService', dataService);
            app.service('qlikService', qlikService);
            app.service('currentSelectionsService',currentSelectionsService);
            app.service('filterDropdownService',filterDropdownService);

            app.run(['qlikService', function (qlikService) {
                qlikService.openApp(qlik, appId, config);
                qlikObject = qlik;
            }]);
            angular.bootstrap(document, ["qlik-angular", "mashup-app"]);
        }
    )
});