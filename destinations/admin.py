from django.contrib import admin
from .models import Location, Review
from django_summernote.admin import SummernoteModelAdmin

# Register your models here.
admin.site.register(Review)

@admin.register(Location)
class LocationAdmin(SummernoteModelAdmin):

    list_display = ('name', 'country', 'slug')
    search_fields = ['name', 'country', 'posted_on']
    prepopulated_fields = {'slug': ('name',)}
    summernote_fields = ('description',)