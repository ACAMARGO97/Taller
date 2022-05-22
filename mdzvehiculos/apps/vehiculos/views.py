from django.shortcuts import render, redirect
from apps.vehiculos.form import vehiculoForm, marcaForm, tipovehiculosForm
from apps.vehiculos.models import Marca, Vehiculo, TipoVehiculo

# Create your views here.

def listVehiculos(request):
    vehiculos = Vehiculo.objects.all().order_by('-id')
    context = {'vehiculos': vehiculos}
    return render(request, 'vehiculos/listVehiculos.html',context)

def listMarcas(request):
    marcas = Marca.objects.all().order_by('-id')
    context = {'marcas': marcas}
    return render(request, 'marcas/listMarcas.html',context)
    
def listTipovehiculos(request):
    tiposvehiculos = TipoVehiculo.objects.all().order_by('-id')
    context = {'tipovehiculos': tiposvehiculos}
    return render(request, 'tipovehiculos/listTipovehiculos.html',context)

def home(request):
    return render(request, 'base/base.html')

def vehiculosCreate(request):
    if request.method == 'POST':
        form = vehiculoForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('vehiculos:listvehiculos')
    else:
        form = vehiculoForm()
    return render(request, 'vehiculos/vehiculo_form.html', {'form': form})

def marcasCreate(request):
    if request.method == 'POST':
        form = marcaForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('marcas:listMarcas')
    else:
        form = marcaForm()
    return render(request, 'marcas/marcas_form.html', {'form': form})

def tipovehiculosCreate(request):
    if request.method == 'POST':
        form = tipovehiculosForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('tipovehiculos:listTipovehiculos')
    else:
        form = marcaForm()
    return render(request, 'tipovehiculos/tipovehiculos_form.html', {'form': form})

def vehiculosUpdate(request, id_vehiculo):
    mant = Vehiculo.objects.get(pk=id_vehiculo)

    if request.method == 'GET':
        form = vehiculoForm(instance=mant)
    else:
        form = vehiculoForm(request.POST, instance=mant)
        if form.is_valid():
            form.save()
        return redirect('vehiculos:listvehiculos')
    
    return render(request, 'vehiculos/vehiculo_form.html', {'form': form})

def marcasUpdate(request, id_marcas):
    mant = Marca.objects.get(pk=id_marcas)

    if request.method == 'GET':
        form = marcaForm(instance=mant)
    else:
        form = marcaForm(request.POST, instance=mant)
        if form.is_valid():
            form.save()
        return redirect('marcas:listMarcas')
    
    return render(request, 'marcas/marcas_form.html', {'form': form})

def tipovehiculosUpdate(request, id_tipovehiculos):
    mant = TipoVehiculo.objects.get(pk=id_tipovehiculos)

    if request.method == 'GET':
        form = tipovehiculosForm(instance=mant)
    else:
        form = tipovehiculosForm(request.POST, instance=mant)
        if form.is_valid():
            form.save()
        return redirect('tipovehiculos:listTipovehiculos')
    
    return render(request, 'tipovehiculos/tipovehiculos_form.html', {'form': form})

def vehiculosDelete(request, id_vehiculo):
    mant = Vehiculo.objects.get(pk=id_vehiculo)
    if request.method == 'POST':
       mant.delete()
       return redirect('vehiculos:listvehiculos')
    return render(request, 'vehiculos/vehiculosDelete.html', {'vehiculo': mant})

def marcasDelete(request, id_marca):
    mant = Marca.objects.get(pk=id_marca)
    if request.method == 'POST':
       mant.delete()
       return redirect('marcas:listMarcas')
    return render(request, 'marcas/marcasDelete.html', {'marca': mant})

def tipovehiculosDelete(request, id_tipovehiculo):
    mant = TipoVehiculo.objects.get(pk=id_tipovehiculo)
    if request.method == 'POST':
       mant.delete()
       return redirect('tipovehiculos:listTipovehiculos')
    return render(request, 'tipovehiculos/tipovehiculosDelete.html', {'tipovehiculo': mant})