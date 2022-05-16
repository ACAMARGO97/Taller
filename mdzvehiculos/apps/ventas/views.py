#from django.shortcuts import render, redirect
#from apps.ventas.form import ventaForm
#from apps.ventas.models import Venta
# #Create your views here.
#
#def listventas(request):
#    venta = Venta.objects.all().order_by('-id')
#    context = {'ventas': venta}
#    return render(request, 'ventas/listventas.html',context)
#
#def hom(request):
#    return render(request, 'base/base.html')
#
#def ventasCreate(request):
#    if request.method == 'POST':
#        form = ventaForm(request.POST)
#        if form.is_valid():
#            form.save()
#        return redirect('ventas:listventas')
#    else:
#        form = ventaForm()
#    return render(request, 'ventas/venta_form.html', {'form': form})
#