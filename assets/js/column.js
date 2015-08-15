---
---
{% include js/jquery.js %}
{% comment %}{% include js/bootstrap/transition.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/alert.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/button.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/carousel.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/collapse.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/dropdown.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/modal.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/tooltip.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/popover.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/scrollspy.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/tab.js %}{% endcomment %}
{% comment %}{% include js/bootstrap/affix.js %}{% endcomment %}
$(document).ready(function() {
	/* Scrollable link */
	$('a.scrollable').click(function() {
		var id = $(this).data('target');
		$('html, body').animate({ scrollTop : $(id).offset().top }, 'slow');
		return false;
	});
});
