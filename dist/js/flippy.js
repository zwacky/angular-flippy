/**
 * handles the behaviour of flipping card.
 */
angular.module('angular-flippy', [])
	.directive('flippy', function() {
		return {
			restrict: 'EA',
			link: function($scope, $elem, $attrs) {

				/**
				 * behaviour for flipping effect.
				 */
				$scope.flip = function() {
					$elem.toggleClass('flipped');
				}

			}
		};
	});