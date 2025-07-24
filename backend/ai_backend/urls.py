from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("allauth.urls")),
    path("auth/", include("dj_rest_auth.urls")),
    path("users/", include("users.urls")),
]