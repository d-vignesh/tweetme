from django.db import models
from django.conf import settings
from django.db.models import Q

import random

User = settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class TweetQuerySet(models.QuerySet):
    def feed(self, user):
        profile_exists = user.following.exists()
        followed_user_ids = []
        if profile_exists:
            followed_user_ids = user.following.values_list("user__id", flat=True)
        return self.filter(
            Q(user__id__in=followed_user_ids) |
            Q(user=user)
        ).distinct().order_by('-timestamp')
 

class TweetManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return TweetQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)

class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tweets')
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='tweet_user' ,blank=True, through=TweetLike)
    timestamp = models.DateTimeField(auto_now_add=True)
    parent = models.ForeignKey("self", null=True, on_delete=models.SET_NULL)

    objects = TweetManager()

    class Meta:
        ordering = ['-id']

    @property 
    def is_retweet(self):
        return self.parent != None 



