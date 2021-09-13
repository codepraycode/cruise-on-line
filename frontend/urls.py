from django.urls import path
from .views import index

app_name = "frontend"


urlpatterns = [
    path('',view=index, name=''),
    path('join',index),
    path('create', index),
    path('room/<str:code>', index),
]
