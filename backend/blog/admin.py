from django.contrib import admin
from .models import Blog

class BlogAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'description', 'completed') # add this

# Register your models here.
admin.site.register(Blog, BlogAdmin) # add this

