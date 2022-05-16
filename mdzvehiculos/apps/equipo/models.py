from django.db import models

class Equipo(models.Model):
    nombre = models.CharField(max_length=20)
    modelo = models.CharField(max_length=30)
    marca = models.CharField(max_length=15)

    def __str__(self):
        return self.nombre