from django.urls import path
from apps.vehiculos.views import listVehiculos, vehiculosCreate, vehiculosUpdate, vehiculosDelete, listMarcas, marcasCreate, marcasUpdate, marcasDelete, listTipovehiculos, tipovehiculosCreate, tipovehiculosUpdate, tipovehiculosDelete


app_name= 'vehiculos'
app_name= 'marcas'
app_name= 'tipovehiculos'
urlpatterns = [
    path('', listVehiculos, name= 'listvehiculos'),
    path('m', listMarcas, name= 'listMarcas'),
    path('t', listTipovehiculos, name= 'listTipovehiculos'),

    path('nuevo/', vehiculosCreate, name= 'vehiculosCreate'),
    path('actualizar/<int:id_vehiculo>/', vehiculosUpdate, name= 'vehiculosUpdate'),
    path('eliminar/<int:id_vehiculo>/', vehiculosDelete, name= 'vehiculosDelete'),

    path('nuevoo/', marcasCreate, name= 'marcasCreate'),
    path('actualizarr/<int:id_marca>/', marcasUpdate, name= 'marcasUpdate'),
    path('eliminarr/<int:id_marca>/', marcasDelete, name= 'marcasDelete'),
    
    path('nuevooo/', tipovehiculosCreate, name= 'tipovehiculosCreate'),
    path('actualizarrr/<int:id_tipovehiculo>/', tipovehiculosUpdate, name= 'tipovehiculosUpdate'),
    path('eliminarrr/<int:id_tipovehiculo>/', tipovehiculosDelete, name= 'tipovehiculosDelete'),
]

