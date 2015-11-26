/**
 * Initialize typeahead.js
 */
$('.typeahead').typeahead({
  minLength: 1,
  name: $(this).attr('id'),
  limit: 10,
  remote: {
	url: 'https://graph.facebook.com/v2.5/search?fields=id,name,location,picture,checkins,category&type=place&q=%QUERY&limit=10&access_token={fb_app_access_token}',
    filter: function(parsedResponse) {
	  actualData = parsedResponse['data']
      var result = [];
      for (var i = 0; i < actualData.length; i++) {
		element = actualData[i];
        placeId = actualData[i].id;
		if(element.location.street.length > 0) {
			description = element.location.street;
		} else {
			description = element.category;
		};
        result.push({
          name: element.name,
          value: element.name,
          placeId: element,
          street: actualData[i].location.street,
          countryName: actualData[i].location.country,
		  picture: actualData[i].picture.data.url,
		  checkins: actualData[i].checkins,
		  category: actualData[i].category,
		  description: description,
        });
      }
      return result;
    }
  },
  template: [
	'<div class="media">',
		'<a class="media-left" href="#"><img class="media-object" src="{{picture}}"></a>',
		'<div class="media-body"><p class="place-name">{{name}}</p>',
    		'<p class="place-description">{{description}}</p></div>',
	'</div>'
  ].join(''),
  engine: Hogan
});

/**
 * Fix tt hint
 */
$('.typeahead').on('typeahead:initialized', function(e, data) {
  // fix for using twitter bootstrap
  var hint = $(e.target).prev('.tt-hint');
  var small = $(e.target).is('.input-sm');
  var large = $(e.target).is('.input-lg');
  if (small) {
    hint.addClass('input-sm');
  } else if (large) {
    hint.addClass('input-lg');
  } else {
    hint.addClass('input');
  }
  hint.addClass('form-control');
});
