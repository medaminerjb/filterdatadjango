$(document).ready(function(){
	$(".Loader").hide();// loader p class named ajaxloader
	// Product Filter Start
	$(".exemple").on('click',function(){
		var _filterObj={};
		$(".exemple").each(function(index,ele){
			var _filterVal=$(this).val();
			var _filterKey=$(this).data('filter');
			_filterObj[_filterKey]=Array.from(document.querySelectorAll('input[data-filter='+_filterKey+']:checked')).map(function(el){
			 	return el.value;
			});
		});

		// Run Ajax
		$.ajax({
			url:'/filter-data',// define url for function filter data in urls.py
			data:_filterObj,
			dataType:'json',
			beforeSend:function(){
				$(".Loader").show();
			},
			success:function(res){
				console.log(res);
				$("#filterddata").html(res.data);// where filter will show 
				$(".Loader").hide();
			}
		});
	});
});