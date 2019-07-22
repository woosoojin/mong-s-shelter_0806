from django.shortcuts import render
from .models import Review, Question, Adopting, School_parents, School_dog

# Create your views here.
def review(request):
    reviews = Review.objects
    return render(request, 'review.html', {'reviews':reviews})

def QA(request):
    questions = Question.objects
    return render(request, 'q&a.html', {'questions':questions})

# 입양
def adopting(request):
    adoptings = Adopting.objects
    return render(request, 'adopting.html', {'adoptings':adoptings})

def adopting_de(request):
    adoptings2 = Adopting.objects
    return render(request, 'adopting_de.html', {'adoptings2':adoptings2})

def school_parents(request):
    schools = School_parents.objects
    return render(request, 'school_parents.html', {'schools':schools})

def school_dog(request):
    schools2 = School_dog.objects
    return render(request, 'school_dog.html', {'schools2':schools2})