from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model

User = get_user_model()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = User.USERNAME_FIELD  # ✅ Uses email as unique identifier

    # ✅ Customize fields for email/password login
    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if not email or not password:
            raise serializers.ValidationError("❌ Both email and password are required.")

        # ✅ Authenticate user with email instead of username
        user = authenticate(
            request=self.context.get('request'),
            username=email,  # Since username_field is email
            password=password
        )

        if user is None:
            raise serializers.ValidationError("❌ Invalid email or password.")

        if not user.is_active:
            raise serializers.ValidationError("❌ Account is inactive. Please contact support.")

        if not user.is_verified:  # ✅ Check for email verification
            raise serializers.ValidationError("❌ Email is not verified. Please check your inbox.")

        # ✅ Generate token using parent validate()
        data = super().validate(attrs)
        data.update({
            "user": {
                "id": user.id,
                "email": user.email,
                "first_name": user.first_name,
                "job_title": user.job_title
            }
        })
        return data
