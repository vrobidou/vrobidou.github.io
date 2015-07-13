---
---
{% include js/jquery.js %}
{% include js/bootstrap/transition.js %}
{% include js/bootstrap/alert.js %}
{% include js/bootstrap/button.js %}
{% include js/bootstrap/carousel.js %}
{% include js/bootstrap/collapse.js %}
{% include js/bootstrap/dropdown.js %}
{% include js/bootstrap/modal.js %}
{% include js/bootstrap/tooltip.js %}
{% include js/bootstrap/popover.js %}
{% include js/bootstrap/scrollspy.js %}
{% include js/bootstrap/tab.js %}
{% include js/bootstrap/affix.js %}
$(document).ready(function() {
	/* Scrollspy */
	$('body').scrollspy({ target: '#navbar' });
	/* Navbar link */
	$('#navbar a').click(function() {
		var id = $(this).data('target');
		$('html, body').animate({ scrollTop : $(id).offset().top }, 'slow');
		return false;
	});
});
