from django.db import models
from django.contrib.auth.models import User
from apps.equipo.models import Equipo

class Mantenimiento(models.Model):
    fecha = models.DateField()
    tipomantenimiento = models.CharField(max_length=20)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    equipo = models.ForeignKey(Equipo, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.fecha
