from django.db import models
from django.contrib.auth.models import User

class Habit(models.Model):
    water = models.PositiveIntegerField(null=True)
    sleep = models.PositiveIntegerField(null=True)
    meals = models.PositiveIntegerField(null=True)
    sweets = models.PositiveIntegerField(null=True)
    junkfood = models.PositiveIntegerField(null=True)
    crosstraining = models.PositiveIntegerField(null=True)
    core = models.PositiveIntegerField(null=True)
    lifting = models.PositiveIntegerField(null=True)
    stretching = models.PositiveIntegerField(null=True)
    mood = models.PositiveIntegerField(null=True)
    created_at = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="habits", on_delete=models.CASCADE, null=True)
