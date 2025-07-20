from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils import timezone
import datetime

# ✅ Custom user manager
class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)

# ✅ Custom user model
class CustomUser(AbstractUser):
    username = None  # ❌ Remove username field
    email = models.EmailField(unique=True)  # ✅ Email is now the unique identifier

    is_verified = models.BooleanField(default=False)
    job_title = models.CharField(max_length=100, blank=True)

    USERNAME_FIELD = 'email'  # ✅ Use email as username
    REQUIRED_FIELDS = []  # No additional fields

    objects = CustomUserManager()  # ✅ Set custom user manager

    def __str__(self):
        return self.email

# ✅ Token expiry default function
def default_expiry():
    return timezone.now() + datetime.timedelta(days=1)

# ✅ Verification token model
class VerificationToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="verification_tokens")
    token = models.CharField(max_length=64, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(default=default_expiry)

    def is_expired(self):
        return timezone.now() > self.expires_at

    def __str__(self):
        return f"Verification token for {self.user.email}"


