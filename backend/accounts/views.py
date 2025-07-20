from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import VerificationToken
from .serializers import MyTokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken



User = get_user_model()

# ✅ Signup view: Sends verification email
class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email", "").lower().strip()
        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({"error": "Email already registered"}, status=status.HTTP_400_BAD_REQUEST)

        # ✅ Create inactive user without username
        user = User.objects.create(
            email=email,
            is_active=False,
            is_verified=False
        )
        user.set_unusable_password()  # ✅ Set unusable password for now
        user.save()

        # Remove old tokens
        VerificationToken.objects.filter(user=user).delete()

        # Generate activation token
        token = get_random_string(48)
        VerificationToken.objects.create(user=user, token=token)

        activation_link = f"http://localhost:5173/activate/{token}"
        

        send_mail(
            "Activate Your Account",
            f"Click the link to activate your account:\n\nFrontend: {activation_link}",
            "no-reply@yourapp.com",
            [email],
        )

        return Response({"message": "✅ Verification email sent. Please check your inbox."}, status=200)

# ✅ Complete registration view
class CompleteRegistrationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, token):
        try:
            token_obj = VerificationToken.objects.get(token=token)
        except VerificationToken.DoesNotExist:
            return Response({"error": "Invalid or expired token."}, status=400)

        if token_obj.is_expired():
            token_obj.delete()
            return Response({"error": "Token expired."}, status=400)

        name = request.data.get("name", "").strip()
        job_title = request.data.get("job_title", "").strip()
        password = request.data.get("password", "").strip()

        if not name or not password:
            return Response({"error": "Name and password are required."}, status=400)

        user = token_obj.user
        user.first_name = name
        user.job_title = job_title
        user.set_password(password)
        user.is_active = True
        user.is_verified = True
        user.save()

        token_obj.delete()

        return Response({"message": "🎉 Account activated successfully!"}, status=201)

# ✅ Custom JWT login view (email-based)
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)