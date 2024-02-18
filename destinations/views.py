from django.shortcuts import render, redirect
from django.views.generic import ListView
from .models import Location
from .forms import ReviewForm
from django.db.models import Q


# Create your views here.
def index(request):
    return render(request, 'index.html')

# List of destinations
class Destinations(ListView):
    template_name = "destinations.html"
    context_object_name = "locations"
    paginate_by = 5

    def get_queryset(self):
        queryset = Location.objects.all()
        search_term = self.request.GET.get('search', '')
        if search_term:
            queryset = queryset.filter(
                Q(name__icontains=search_term) |
                Q(description__icontains=search_term) |
                Q(city__icontains=search_term) |
                Q(country__icontains=search_term)
                # Add more fields here if you want to search in them
            )
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        coords = list(Location.objects.values_list('coords', flat=True))

        # Pass the coordinates to the context
        context['coords'] = coords

        for location in context['locations']:
            avg_score, has_reviews = calculate_rating(location.review.all())
            location.avg_score = avg_score
            location.has_reviews = has_reviews
        return context
    



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

    avg_score, has_reviews = calculate_rating(reviews)

    context = {
        'location': location,
        'reviews': reviews,
        'has_reviews': has_reviews,
        'form': form,
        'avg_score': avg_score,
    }

    return render(request, 'destinations/detail.html', context)
    
def calculate_rating(reviews):
    has_reviews = False
    avg_score =  0

    if reviews.exists():
        total_rating = sum(review.rating for review in reviews)
        avg_score = round(total_rating / len(reviews),  2)
        has_reviews = True

    return avg_score, has_reviews
