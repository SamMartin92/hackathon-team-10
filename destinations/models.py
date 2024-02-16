from django.db import models
from django.db.models.fields.related import ForeignKey
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Review(models.Model):
    rating = models.PositiveIntegerField(default=3,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    description = models.TextField()
    location = ForeignKey(Location, on_delete=models.CASCADE, related_name="review")

    def __str__(self):
        return self.rating