// $(document).ready(function() {
// 			$('#fullpage').fullpage({
// 				anchors: ['firstPage', 'secondPage', '3rdPage'],
// 				sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', "#b43cb5"],
// 				navigation: true,
// 				navigationPosition:	 'right',
// 				navigationTooltips: ['First page', 'Second page', 'Third and last page'],
//         loopTop: true,
//         loopBottom: true,
// 				responsiveWidth: 900,
// 				afterResponsive: function(isResponsive){
//
// 				}
//
// 			});
// 		});
$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage'],
				// sectionsColor: ['#f05a21', '#2EC8C4', '#eb008b'],
				navigation: true,
				navigationPosition:	 'right',
				navigationTooltips: ['First page', 'Second page', 'Third and last page'],
				loopTop: true,
				loopBottom: true,
				responsiveHeight: 600,
				afterResponsive: function(isResponsive){

				}
			});
			 window.scrollReveal = new scrollReveal();
		});
