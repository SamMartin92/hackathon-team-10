# Generated by Django 5.0.2 on 2024-02-18 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('destinations', '0003_alter_location_options_alter_review_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='coords',
            field=models.TextField(blank=True),
        ),
    ]
