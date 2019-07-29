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

def magazine_de(request):
    return render(request, 'magazine_de.html')

def magazine_de2(request):
    return render(request, 'magazine_de2.html')    