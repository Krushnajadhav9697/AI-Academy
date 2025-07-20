from django.urls import path
from .views import SignupView, CompleteRegistrationView, CustomTokenObtainPairView,LogoutView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # ✅ Signup endpoint
    path("signup/", SignupView.as_view(), name="signup"),

    # ✅ Account activation endpoint
    path("activate/<str:token>/", CompleteRegistrationView.as_view(), name="complete-registration"),

    # ✅ Custom JWT login endpoint (uses email + password)
    path("token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),

    # ✅ JWT token refresh endpoint
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    path("api/logout/", LogoutView.as_view(), name="logout"),

]
