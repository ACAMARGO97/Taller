from django.contrib import admin
from apps.mantenimiento.models import Mantenimiento

# Register your models here.

class MantenimientoAdmin(admin.ModelAdmin):
    list_display = ('fecha', 'tipomantenimiento', 'user','equipo')
    ordering = ('fecha', 'tipomantenimiento', 'user','equipo')
    search_fields = ('fecha', 'tipomantenimiento', 'user','equipo')
    list_filter = ('fecha', 'tipomantenimiento', 'user','equipo',)

admin.site.register(Mantenimiento, MantenimientoAdmin)