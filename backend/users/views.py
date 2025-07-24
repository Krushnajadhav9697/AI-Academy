
# from django.conf import settings
from .serializers import PreregisterSerializer, FinishRegistrationSerializer
from allauth.account.models import EmailAddress
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from dj_rest_auth.views import LoginView as RestAuthLoginView
# from dj_rest_auth.views import LogoutView


class PreregisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = PreregisterSerializer

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        return Response({"detail": "Verification email sent."}, status=201)


class CompleteRegistrationView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = FinishRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        # Manually set email as verified
        email_address = EmailAddress.objects.get(user=user, email=user.email)
        email_address.verified = True
        email_address.save()
        return Response({"detail": "Registration complete. Please log in."}, status=200)

class LoginView(RestAuthLoginView):
    """Exposed under /users/login/ – CSRF-exempt, JSON only."""
    pass
