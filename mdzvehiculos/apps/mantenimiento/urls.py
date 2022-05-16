from django.urls import path
from apps.mantenimiento.views import listMantenimiento, mantenimientoCreate, mantenimientoUpdate, mantenimientoDelete

app_name= 'mantenimiento'
urlpatterns = [
    path('', listMantenimiento, name= 'listmantenimiento'),
    path('nuevo/', mantenimientoCreate, name= 'mantenimientoCreate'),
    path('actualizar/<int:id_mantenimiento>/', mantenimientoUpdate, name= 'mantenimientoUpdate'),
    path('eliminar/<int:id_mantenimiento>/', mantenimientoDelete, name= 'mantenimientoDelete'),
]
