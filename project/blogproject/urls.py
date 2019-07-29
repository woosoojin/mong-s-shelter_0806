"""blogproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import blog.views
import post.views

from django.conf import settings
from django.conf.urls.static import static
# from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', blog.views.index, name="index"),
    path('main/', blog.views.main, name="main"),
    path('about_us/', blog.views.about_us, name="about_us"),
    path('team_member/', blog.views.team_member, name="team_member"),
    path('service/', blog.views.service, name="service"),
    path("magazine_de/", blog.views.magazine_de, name="magazine_de"),
    path("magazine_de2/", blog.views.magazine_de2, name="magazine_de2"),

    path('review/', post.views.review, name="review"),
    # path('question/', post.views.question, name="question"),
    path('q&a/', post.views.QA, name="q&a"),

    
    path('adopting/', post.views.adopting, name='adopting'),
    path('adopting_de/', post.views.adopting_de, name='adopting_de'),
    path('school_parents/', post.views.school_parents, name='school_parents'),
    path('school_dog/', post.views.school_dog, name='school_dog'),
    path('personal_info/', post.views.personal_info, name='personal_info'),
    
    path("magazine/", post.views.magazine, name="magazine"),
    #path('accounts/', include('allauth.urls')),

    #path('users/', blog.views.users, name='users'),

    path('user_accounts/', include('user_accounts.urls')),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# + staticfiles_urlpatterns()