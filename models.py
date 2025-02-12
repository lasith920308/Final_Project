from django.db import models
from django.contrib.auth.models import AbstractUser

class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    department = models.ForeignKey(Department)
    
    def __str__(self):
        return self.name

class Marks(models.Model):
    student = models.ForeignKey(Student)
    subject = models.CharField(max_length=100)
    total_marks = models.IntegerField()

    def __str__(self):
        return self.total_marks

class Admission(models.Model):
    STATUS_CHOICES = (
        ('Approved', 'Pending', 'Rejected'),
    )
    student = models.OneToOneField(Student)
    date_of_admission = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=10)

    def __str__(self):
        return self.date_of_admission
    
    
