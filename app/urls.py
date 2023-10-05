from django.contrib import admin
from django.urls import path
from .views import index,register,login_user,logout_user
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', index, name="index"),
    path('home_page/', views.home_page, name='home_page'),
    path('register/',register,name="register"),
    path("login_user", login_user, name="login_user"),
    path('logout_user', logout_user, name="logout_user"),
    path('arm-workout/', TemplateView.as_view(template_name='arm-workout.html'), name='arm-workout'),
    path('home/', TemplateView.as_view(template_name='home.html'), name='home'),
    path('six/', TemplateView.as_view(template_name='six.html'), name='six'),
    path('lose/', TemplateView.as_view(template_name='lose.html'), name='lose'),
    path('fitnesscoach/', TemplateView.as_view(template_name='fitnesscoach.html'), name='fitnesscoach'),
    path('bmi/', TemplateView.as_view(template_name='bmi.html'), name='bmi'),
    path('wellness/', TemplateView.as_view(template_name='wellness.html'), name='wellness'),
    path('nutrition/', TemplateView.as_view(template_name='nutrition.html'), name='nutrition'),
    path('sleep/', TemplateView.as_view(template_name='sleep.html'), name='sleep'),
    path('menatal-health/', TemplateView.as_view(template_name='mental-health.html'), name='mental-health'),
    path('fitness/', TemplateView.as_view(template_name='fitness.html'), name='fitness'),
    path('children/', TemplateView.as_view(template_name='children.html'), name='children'),
    path('weight/', TemplateView.as_view(template_name='weight.html'), name='weight'),
    path('mens/', TemplateView.as_view(template_name='mens.html'), name='mens'),
    path('womens/', TemplateView.as_view(template_name='womens.html'), name='womens'),
    path('pregnancy/', TemplateView.as_view(template_name='pregnancy.html'), name='pregnancy'),
    path('privacy/', TemplateView.as_view(template_name='privacy.html'), name='privacy'),
    path('advertising/', TemplateView.as_view(template_name='advertising.html'), name='advertising'),
    path('terms/', TemplateView.as_view(template_name='terms.html'), name='terms'),
    path('contactUS/', TemplateView.as_view(template_name='contactUS.html'), name='contactUS'),
    path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
    path('services/', TemplateView.as_view(template_name='services.html'), name='services'),
    path('accessibility/', TemplateView.as_view(template_name='accessibility.html'), name='accessibility'),   
]
    