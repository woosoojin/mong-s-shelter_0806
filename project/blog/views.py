from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def vi(request):
    return render(request, 'vi.html')