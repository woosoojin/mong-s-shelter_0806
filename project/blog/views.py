from django.shortcuts import render

# Create your views here.

from django.shortcuts import render

def main(request):
    return render(request, 'main.html')

def index(request):
    return render(request, 'index.html')

# about
def about_us(request):
    return render(request, 'about_us.html')

def team_member(request):
    return render(request, 'team_member.html')

def service(request):
    return render(request, 'service.html')

# 훈련소
def school_dog(request):
    return render(request, 'school_dog.html')

def school_parent(request):
    return render(request, 'school_parent.html')

def users(request):
    return render(request, 'users.html')