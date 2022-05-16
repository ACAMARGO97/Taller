from django import forms
from apps.mantenimiento.models import Mantenimiento

class mantenimientoForm(forms.ModelForm):
    class Meta:
        model = Mantenimiento

        fields = [
            'fecha',
            'tipomantenimiento',
            'user',
            'equipo',
        ]

        labels = {
            'fecha': 'Ingrese la Fecha',
            'tipomantenimiento': 'Ingrese el Tipo de Mantenimiento',
            'user': 'Ingrese el Usuario',
            'equipo': 'Ingrese el Equipo',
        }

        Widget = {
            'fecha': forms.DateInput(attrs={'class': 'forms-control'}),
            'tipomantenimiento': forms.TextInput(attrs={'class': 'forms-control'}),
            'user': forms.Select(attrs={'class': 'forms-control'}),
            'equipo': forms.Select(attrs={'class': 'forms-control'}),
        }