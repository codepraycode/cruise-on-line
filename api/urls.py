from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, UserInRoom, LeaveRoom, UpdateView

urlpatterns = [
    path('room', view=RoomView.as_view(), name="room"),
    path('create-room', view=CreateRoomView.as_view(), name="create-room"),
    path('get-room', view=GetRoom.as_view(), name='get-room'),
    path('join-room', view=JoinRoom.as_view(), name='join-room'),
    path('user-in-room', view=UserInRoom.as_view(),name="user-in-room"),
    path('leave-room', view=LeaveRoom.as_view(), name="leave-room"),
    path('update-room', view=UpdateView.as_view(), name="update-room"),
]
