# Generated by Django 3.2.6 on 2021-09-11 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spotify', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spotifytoken',
            name='user',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]