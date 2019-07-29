from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Review, Question, Adopting, School_parents, School_dog, Magazine

# Create your views here.
def review(request):
    reviews = Review.objects
    return render(request, 'review.html', {'reviews':reviews})

def QA(request):
    questions = Question.objects
    return render(request, 'q&a.html', {'questions':questions})

"""
def question(request):
    questions = Question.objects
    return render(request, 'question.html', {'questions':questions})
"""
# 입양
def adopting(request):
    adoptings = Adopting.objects
    adopting_list = Adopting.objects.all()
    paginator = Paginator(adopting_list, 3)
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    
    return render(request, 'adopting.html', {'adoptings':adoptings, 'posts':posts})

def adopting_de(request):
    adoptings2 = Adopting.objects
    return render(request, 'adopting_de.html', {'adoptings2':adoptings2})


# 교육
def school_parents(request):
    schools = School_parents.objects
    return render(request, 'school_parents.html', {'schools':schools})

def school_dog(request):
    schools2 = School_dog.objects
    school_list = School_dog.objects.all()
    paginator = Paginator(school_list, 5)
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    return render(request, 'school_dog.html', {'schools2':schools2, 'posts':posts})

def personal_info(request):
    return render(request, 'personal_info.html')

# 메거진
def magazine(request):
    magazines = Magazine.objects
    return render(request, 'magazine.html', {'magazines':magazines})