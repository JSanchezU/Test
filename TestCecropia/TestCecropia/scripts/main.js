'use strict';

$(document).ready(function () {

				var $divs = $('div.app');

				$('#alphBntAZ').on('click', function () {
								var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
												return $(a).find('h5').text() > $(b).find('h5').text();
								});
								$('#app-board').html(alphabeticallyOrderedDivs);
				});

				$('#alphBntZA').on('click', function () {
								var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
												return $(b).find('h5').text() > $(a).find('h5').text();
								});
								$('#app-board').html(alphabeticallyOrderedDivs);
				});
});
//# sourceMappingURL=main.js.map
