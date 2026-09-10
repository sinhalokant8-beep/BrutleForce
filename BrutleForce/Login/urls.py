from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='login_view'),
    path('login/', views.login, name='login'),
    
    
]
