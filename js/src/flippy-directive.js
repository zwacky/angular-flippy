/**
 * handles the behaviour of flipping card.
 */
angular.module('angular-flippy', [])
.directive('flippy', function() {
	return {
		restrict: 'E',
		scope: {},
		link: function($scope, $elem, $attrs) {

			/**
			 * behaviour for flipping effect.
			 */
			var flip = function() {
				$elem.toggleClass('flipped');
			}

			if ($attrs.clickToggle) {
				$elem.bind('click', flip);
			}
			if ($attrs.mouseoverToggle) {
				$elem.bind('mouseenter', flip);
				$elem.bind('mouseleave', flip);
			}

		}
	};
});