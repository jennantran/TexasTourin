from django.db import models

# Create your models here.
class Blog(models.Model):
  title = models.CharField(max_length=120)
  city = models.CharField(max_length=20)
  category = models.CharField(max_length=50)
  description = models.TextField()

  def _str_(self):
    return self.title
