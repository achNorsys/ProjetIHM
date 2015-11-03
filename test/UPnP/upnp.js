var utils				= require( "../../js/utils.js" )
		, context = {bricks:{}}
  ;
  
require( "./upnp.css" );


console.log("Accessing server to get context.");
angular	.module('media', [])
		.controller	( 'controller', function ($http,$scope) {
							var ctrl= this;
							ctrl.context = context;
							//ajout attribut au controlleur (cette instance)
							//this.data = {} ; //résultat : objet(bricks etc...)
							
							// faire la requête pour avoir la liste des bricks
							$http.get('/getContext').success(function(x){
								console.log(x);
								ctrl.context=x;
								utils.io.on	( "brickAppears"
			, function(x) {console.log("brickAppears:", json);
							 }
			);
utils.io.on	( "brickDisappears"
			, function(x) {console.log("brickDisappears:", json);
							 }
			);
								}
								); // peut être une promise donc on crée une fonction
							// abonnement sur les briques (appear disapear)
							// ici uniquement stockage des données / formatage
						}
					);
		//fonction construction controlleur (service)
/*
console.log("Accessing server to get context.");
var getContext = utils.XHR( 'GET', '/getContext');
getContext.then	( function(response) {
					 var json = JSON.parse( response.responseText )
					 console.log(json);
					}
				, function(err) {console.error(err);}
				);
// Subscribing to appearing/disappearing events
utils.initIO(window.location.origin + "/m2m");
utils.io.on	( "brickAppears"
			, function(json) {console.log("brickAppears:", json);
							 }
			);
utils.io.on	( "brickDisappears"
			, function(json) {console.log("brickDisappears:", json);
							 }
			);

*/