from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser, VerificationToken


class CustomUserCreationForm(UserCreationForm):
    """Custom form for creating users with email instead of username."""
    class Meta:
        model = CustomUser
        fields = ("email",)


class CustomUserChangeForm(UserChangeForm):
    """Custom form for changing users."""
    class Meta:
        model = CustomUser
        fields = ("email", "is_active", "is_staff", "is_verified")


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ("email", "is_verified", "is_active", "is_staff", "is_superuser")
    list_filter = ("is_active", "is_staff", "is_verified", "is_superuser")
    ordering = ("email",)
    search_fields = ("email", "job_title")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal info", {"fields": ("job_title",)}),
        ("Permissions", {"fields": ("is_active", "is_verified", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "password1", "password2", "is_verified", "is_staff", "is_superuser"),
        }),
    )


@admin.register(VerificationToken)
class VerificationTokenAdmin(admin.ModelAdmin):
    list_display = ("user", "token", "created_at", "is_expired")
    search_fields = ("user__email",)
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)
