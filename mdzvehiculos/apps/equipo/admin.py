from django.contrib import admin
from apps.equipo.models import Equipo

# Register your models here.

class EquipoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'modelo', 'marca')
    ordering = ('nombre', 'modelo', 'marca')
    search_fields = ('nombre', 'modelo', 'marca')
    list_filter = ('nombre', 'modelo', 'marca',)

admin.site.register(Equipo, EquipoAdmin)
