from django.test import TestCase
from django.contrib.auth import get_user_model 
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient 


from .models import Profile 

User = get_user_model()

class ProfileTestCase(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(username='test1', password='passw0rd1')
        self.user2 = User.objects.create_user(username='test2', password='passw0rd2')

    def get_client(self):
        client = APIClient()
        client.login(username=self.user1.username, password='passw0rd1')
        return client 

    def test_profile_created_via_signal(self):
        qs = Profile.objects.all()
        self.assertEqual(qs.count(), 2)

    def test_following(self):
        first = self.user1
        second = self.user2 
        first.profile.followers.add(second)
        qs = second.following.filter(user=first)
        self.assertTrue(qs.exists())
        first_user_following_no_one = first.following.all()
        self.assertFalse(first_user_following_no_one.exists())

    def test_follow_api_endpoint(self):
        client = self.get_client()
        response = client.post(
            f'/api/profile/{self.user2.username}/follow',
            {'action': 'follow'}
        )
        r_data = response.json()
        count = r_data.get('followers_count')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(count, 1)

    def test_unfollow_api_endpoint(self):

        first = self.user1 
        second = self.user2 
        first.profile.followers.add(second)

        client = self.get_client()
        response = client.post(
            f'/api/profile/{self.user2.username}/follow',
            {'action': 'unfollow'}
        )
        r_data = response.json()
        count = r_data.get('followers_count')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(count, 0)

    def test_cannot_follow_api_endpoint(self):
        client = self.get_client()
        response = client.post(
            f'/api/profile/{self.user1.username}/follow',
            {'action': 'follow'}
        )
        r_data = response.json()
        count = r_data.get('followers_count')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(count, 0)


