/**
 * handles the behaviour of flipping card.
 */
angular.module('angular-flippy', [])
	.directive('flippy', function() {
		return {
			restrict: 'EA',
			link: function($scope, $elem, $attrs) {
				$scope.flipped = false;
				var options = {
					flipDuration: ($attrs.flipDuration) ? $attrs.flipDuration : 400,
					timingFunction: 'ease-in-out',
				};

				// setting flip options
				angular.forEach(['flippy-front', 'flippy-back'], function(name) {
					var el = $elem.find(name);
					if (el.length == 1) {
						angular.forEach(['', '-ms-', '-webkit-'], function(prefix) {
							angular.element(el[0]).css(prefix + 'transition', 'all ' + options.flipDuration/1000 + 's ' + options.timingFunction);
						});
					}
				});

				/**
				 * behaviour for flipping effect.
				 */
				$scope.flip = function() {
					$elem.toggleClass('flipped');
					$scope.flipped = !$scope.flipped;
				}

			}
		};
	});
