#from django.shortcuts import render, redirect
#from apps.vehiculos.form import vehiculoForm
#from apps.vehiculos.models import Vehiculo
#
## Create your views here.
#
#def listVehiculos(request):
#    vehiculos = Vehiculo.objects.all().order_by('-id')
#    context = {'vehiculos': vehiculos}
#    return render(request, 'vehiculos/listVehiculos.html',context)
#
#def home(request):
#    return render(request, 'base/base.html')
#
#def vehiculosCreate(request):
#    if request.method == 'POST':
#        form = vehiculoForm(request.POST)
#        if form.is_valid():
#            form.save()
#        return redirect('vehiculos:listvehiculos')
#    else:
#        form = vehiculoForm()
#    return render(request, 'vehiculos/vehiculo_form.html', {'form': form})
