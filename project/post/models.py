from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length = 255)
    image = models.ImageField(upload_to = 'images/')
    description = models.CharField(max_length = 500)

    def __str__(self):
        return self.title


class Question(models.Model):
    title2 = models.CharField(max_length = 100)
    description2 = models.CharField(max_length = 10000)

    def __str__(self):
        return self.title2

class Adopting(models.Model):
    name = models.CharField(max_length=255)
    image2 = models.ImageField(upload_to='images/')
    description3 = models.CharField(max_length=10000)

    def __str__(self):
        return self.name