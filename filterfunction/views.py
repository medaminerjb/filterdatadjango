from django.template.loader import render_to_string
from django.http import JsonResponse
import requests
from .modals import data
def filter_data(request):
    returenddata = request.GET.getlist('listofdata[]')
    get_data_from_db_to_filter = data.objects.all().order_by('data_id')
    
    if len(returenddata) > 0:
        get_data_from_db_to_filter = get_data_from_db_to_filter.filter(data_to_filter__in=returenddata).distinct()       

    t = render_to_string('ajax/tours.html', {'datas': get_data_from_db_to_filter})
    return JsonResponse({'datas': t})
