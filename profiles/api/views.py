from django.shortcuts import render, redirect 
from django.http import HttpResponse, Http404 , JsonResponse
from django.utils.http import is_safe_url
from django.conf import settings 
from django.contrib.auth import get_user_model 

from rest_framework.response import Response 
from rest_framework.decorators import api_view, permission_classes, authentication_classes 
from rest_framework.permissions import IsAuthenticated 
from rest_framework.authentication import SessionAuthentication

import random

from ..models import Profile 

from ..serializers import PublicProfileSerializer

ALLOWED_HOSTS = settings.ALLOWED_HOSTS
User = get_user_model()


# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_follow_view(request, username, *args, **kwargs):
#     me = request.user
#     other_user_qs = User.objects.filter(username=username)
#     if me.username == username:
#         my_follower_qs = me.profile.followers.all()
#         return Response({'followers_count': my_follower_qs.count()}, status=200)
#     if not other_user_qs.exists():
#         return Response({}, status=404)
#     other = other_user_qs.first()
#     profile = other.profile 
#     data = request.data or {} 
#     action = data.get('action')
#     if action == 'follow':
#         profile.followers.add(me)
#     elif action == 'unfollow':
#         profile.followers.remove(me)
       
#     data = PublicProfileSerializer(instance=profile, context={'request': request}) 
#     return Response(data.data, status=200)

@api_view(['GET', 'POST'])
def profile_detail_api_view(request, username, *args, **kwargs):

    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return Response({'detail': 'user not found'}, status=404) 
    profile_obj = qs.first()
    if request.method == 'POST' and profile_obj.user != request.user:
        data = request.data or {} 
        action = data.get('action')
        if action == 'follow':
            profile_obj.followers.add(request.user)
        elif action == 'unfollow':
            profile_obj.followers.remove(request.user)
    serializer = PublicProfileSerializer(instance=profile_obj, context={'request': request})
    return Response(serializer.data, status=200)


