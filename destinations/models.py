from django.db import models
from django.db.models.fields.related import ForeignKey
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

# Base object for each location on the site
class Location(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

# Base object for each review on the site
class Review(models.Model):
    # Rating is a number between 1 and 5
    name = models.CharField(max_length=50, default="Anonymous")
    rating = models.PositiveIntegerField(default=3,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    description = models.TextField()
    # Each review is linked to a location using the Location model
    location = ForeignKey(Location, on_delete=models.CASCADE, related_name="review")
    posted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.rating}, {self.location.name}, {self.name}"