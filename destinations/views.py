from django.shortcuts import render, redirect
from django.views.generic import ListView
from .models import Location
from .forms import ReviewForm

# Create your views here.


# List of destinations
class Destinations(ListView):
    queryset = Location.objects.all()
    template_name = "destinations.html"
    context_object_name = "locations"
    paginate_by = 10


# Detail of a location, review, etc
def location(request, location_id):
    location = Location.objects.get(id=location_id)
    reviews = location.review.all()
    
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.location = location
            review.save()
            return redirect('location', location_id=location_id)
    else:
        form = ReviewForm()

    context = {
        'location': location,
        'reviews': reviews,
        'form': form,
    }
    return render(request, 'destinations/detail.html', context)
    
