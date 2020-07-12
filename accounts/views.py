from django.shortcuts import render
from rest_framework import status, authentication, permissions
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

# Create your views here.
#This is a view to list all users in the system
class ListUsers(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        
        userList = [[user.id, user.username, user.first_name, user.last_name, user.email] for user in User.objects.all()]
        return Response(userList)