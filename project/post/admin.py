from django.contrib import admin
from .models import Review, Question, Adopting, School_parents, School_dog, Magazine

# Register your models here.
admin.site.register(Review)
admin.site.register(Question)
admin.site.register(Adopting)
admin.site.register(School_parents)
admin.site.register(School_dog)
admin.site.register(Magazine)