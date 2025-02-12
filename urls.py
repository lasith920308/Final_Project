from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DepartmentViewSet, StudentViewSet, MarksViewSet, AdmissionViewSet, RegisterView, LoginView

router = DefaultRouter()
router.register(DepartmentViewSet)
router.register(StudentViewSet)
router.register(MarksViewSet)
router.register(AdmissionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
]

