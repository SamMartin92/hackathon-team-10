from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import ListView
from .models import Location

# Create your views here.

class Destinations(ListView):
    model = Location
    template_name = "destinations.html"
    context_object_name = "locations"