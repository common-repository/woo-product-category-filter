jQuery(document).ready(function(){
	adminCategoryFilter.init();
});

var adminCategoryFilter = {
	init : function(){
		jQuery.expr[':'].Contains = function(a, i, m) {
		  return jQuery(a).text().toUpperCase()
			  .indexOf(m[3].toUpperCase()) >= 0;
		};

			var parent_id = 'category_search';
			var search_div = '<h2 class="hndle">Filter categories</h2>';
			search_div += '<div id="'+parent_id+'-search" style="padding-top:0.9em;" class="inside">';
			search_div += '<input type="text" name="'+parent_id+'-search-field" id="'+parent_id+'-search-field" class="meta-box-search-field" style="width: 100%;" placeholder="Start typing"/>';
			search_div += '<button style="display:none" type="button" id="'+parent_id+'-search-button" class="meta-box-search-button">Go</button>';
			search_div += '<ul id="'+parent_id+'-search-results" class="meta-box-search-results"></ul>';
			search_div +='</div>';

			jQuery('#product_catdiv').prepend(search_div);


		jQuery('body').on('click', '.meta-box-search-button', function(e){
			e.preventDefault();

			var s = jQuery('.meta-box-search-field').val();
			if ( jQuery.trim(s) == "" )
			{
				jQuery('.categorychecklist li').show();
				jQuery('.categorydiv').first().find('ul li').first().find('a').trigger('click');
			}
			else
			{
				var result = jQuery('.categorychecklist li:Contains("'+s+'")');

				jQuery('.categorydiv').first().find('.categorychecklist li').hide();
				result.each(function(){
					jQuery(this).show();
				});


				jQuery('.categorydiv').first().find('ul li').first().find('a').trigger('click');
			}
			//jQuery('.meta-box-search-field').val('');
		});


		jQuery('.meta-box-search-field').keyup(function(e){
			jQuery('.meta-box-search-button').click();
		});

		jQuery('.meta-box-search-field').change(function(e){
			jQuery('.meta-box-search-button').click();
		});
	}
};
