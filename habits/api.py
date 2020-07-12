from habits.models import Habit
from rest_framework import viewsets, permissions
from .serializers import HabitSerializer

class HabitViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = HabitSerializer

    def get_queryset(self):
        return self.request.user.habits.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)