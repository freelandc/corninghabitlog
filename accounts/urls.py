from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from .views import ListUsers
from knox import views as knox_views

#this allows the different data pieces to be called on throughout the program 
#despite different languages being used

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/users', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/users/users', ListUsers.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]