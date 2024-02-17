from django.shortcuts import render, redirect
from django.views.generic import ListView
from .models import Location
from .forms import ReviewForm

# Create your views here.
def index(request):
    return render(request, 'index.html')

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

    review_list = list(reviews.values())
    score=0
    for el in review_list: 
        score += el['rating']
        avg_score = round(score/len(review_list), 2)
        

    context = {
        'location': location,
        'reviews': reviews,
        'form': form,
        'review_list': review_list,
        'avg_score': avg_score,
    }

    return render(request, 'destinations/detail.html', context)
    
