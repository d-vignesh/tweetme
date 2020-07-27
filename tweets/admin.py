from django.contrib import admin

from .models import Tweet, TweetLike 

class TweetLikeAdmin(admin.TabularInline):
    model = TweetLike

class TweetAdmin(admin.ModelAdmin):
    inlines = [TweetLikeAdmin]
    search_fields = ['user__username']
    class Meta:
        model = Tweet 

admin.site.register(Tweet, TweetAdmin)