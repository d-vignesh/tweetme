# Generated by Django 2.2 on 2020-07-11 08:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0003_auto_20200709_1219'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweet',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tweets.Tweet'),
        ),
    ]
