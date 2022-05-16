from django.shortcuts import render, redirect
from apps.mantenimiento.form import mantenimientoForm
from apps.mantenimiento.models import Mantenimiento

# Create your views here.
def home(request):
    return render(request, 'base/base.html')
    
def listMantenimiento(request):
    mantenimiento = Mantenimiento.objects.all().order_by('-id')
    context = {'mantenimiento': mantenimiento}
    return render(request, 'mantenimiento/listmantenimiento.html',context)

def mantenimientoCreate(request):
    if request.method == 'POST':
        form = mantenimientoForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('mantenimiento:listmantenimiento')
    else:
        form = mantenimientoForm()
    return render(request, 'mantenimiento/mantenimiento_form.html', {'form': form})


def mantenimientoUpdate(request, id_mantenimiento):
    mant = Mantenimiento.objects.get(pk=id_mantenimiento)

    if request.method == 'GET':
        form = mantenimientoForm(instance=mant)
    else:
        form = mantenimientoForm(request.POST, instance=mant)
        if form.is_valid():
            form.save()
        return redirect('mantenimiento:listmantenimiento')
    
    return render(request, 'mantenimiento/mantenimiento_form.html', {'form': form})

def mantenimientoDelete(request, id_mantenimiento):
    mant = Mantenimiento.objects.get(pk=id_mantenimiento)
    if request.method == 'POST':
       mant.delete()
       return redirect('mantenimiento:listmantenimiento')
    return render(request, 'mantenimiento/mantenimientoDelete.html', {'mantenimiento': mant})