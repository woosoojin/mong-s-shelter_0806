from django.shortcuts import render
from .models import Post, Question, Adopting

# Create your views here.
def post(request):
    posts = Post.objects
    return render(request, 'post.html', {'posts':posts})

def QA(request):
    questions = Question.objects
    return render(request, 'q&a.html', {'questions':questions})

def adopting(request):
    adoptings = Adopting.objects
    return render(request, 'adopting.html', {'adoptings':adoptings})