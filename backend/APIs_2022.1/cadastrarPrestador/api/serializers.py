from rest_framework import serializers
from cadastrarPrestador import models

class CadastrarPrestadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.cadastrarPrestador
        fields = '__all__'