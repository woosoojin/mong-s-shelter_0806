from django.shortcuts import render
from .models import Post

# Create your views here.
def post(request):
    posts = Post.objects
    return render(request, 'post.html', {'posts':posts})