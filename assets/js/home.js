---
---
{% include js/jquery.js %}
{% include js/bootstrap/transition.js %}
{% comment %}{% include js/bootstrap/alert.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/button.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/carousel.js %}{% endcomment %}
{% include js/bootstrap/collapse.js %}
{% comment %}{% include js/bootstrap/dropdown.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/modal.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/tooltip.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/popover.js %}{% endcomment %}
{% include js/bootstrap/scrollspy.js %}
{% comment %}{% include js/bootstrap/tab.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/affix.js %}{% endcomment %}
{% include js/isotope.pkgd.js %}
$(document).ready(function() {
	/* Scrollspy */
	$('body').scrollspy({ target: '#navbar' });
	/* Scrollable link */
	$('a.scrollable').click(function() {
		var id = $(this).data('target');
		$('html, body').animate({ scrollTop : $(id).offset().top }, 'slow');
		return false;
	});
	/* Navbar collapse */
	$('#navbar a').click(function() {
		if(!$('.navbar-toggle').hasClass('collapsed')) {
			$("#navbar").collapse('hide');
		}
	});
});
