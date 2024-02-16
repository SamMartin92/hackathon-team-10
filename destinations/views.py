from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def destinations(request):
    return HttpResponse("One team. One site. So many destinations!")