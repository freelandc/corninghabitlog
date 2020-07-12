from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#serializers are userd to convert data sent in a HTTP request into 
#a django object and then into json that the program can use

#User Serializer 
# this serializer gets the User model and stores all of the input 
# variables into the model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'id', 'username', 'first_name', 'last_name', 'email', 'password')

#Register Serializer
# this serializer gets the user model and stores all of the input 
# variables into the model to create a new user whenever they register
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','first_name', 'last_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], email=validated_data['email'], password= validated_data['password'])

        return user

#Login Serilizer
# this serializer gets the User model and stores all of the input 
# variables into the model so that they can login by using the past 
# data they have input
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")