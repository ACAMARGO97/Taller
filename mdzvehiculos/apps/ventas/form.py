#from django import forms
#from apps.ventas.models import Venta
#
#class ventaForm(forms.ModelForm):
#    class Meta:
#        model = Venta
#
#        fields = [
#            'fecha',
#            'tipopago',
#        ]
#
#        labels = {
#            'fecha': 'Ingrese la Fecha',
#            'tipopago': 'Ingrese el Tipo de pago',
#        }
#
#        Widget = {
#            'fecha': forms.DateInput(),
#            'tipopago': forms.CharField(),
#        }