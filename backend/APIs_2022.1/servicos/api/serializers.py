from rest_framework import serializers
from servicos import models

class PessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Pessoa
        fields = '__all__'
        
class PrestadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Prestador
        fields = '__all__'