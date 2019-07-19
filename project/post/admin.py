from django.contrib import admin
from .models import Post, Question, Adopting

# Register your models here.
admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Adopting)