from django.contrib import admin
from .models import Student, Department, Marks, Admission

admin.site.register(Student)
admin.site.register(Department)
admin.site.register(Marks)
admin.site.register(Admission)
