# Generated by Django 3.2.6 on 2021-09-11 12:19

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('spotify', '0002_alter_spotifytoken_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='spotifytoken',
            name='access_token',
            field=models.CharField(default=datetime.datetime(2021, 9, 11, 12, 19, 57, 70656, tzinfo=utc), max_length=150),
            preserve_default=False,
        ),
    ]