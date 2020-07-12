from rest_framework import routers
from .api import HabitViewSet

router = routers.DefaultRouter()
router.register('api/habits', HabitViewSet, 'habits')

urlpatterns = router.urls