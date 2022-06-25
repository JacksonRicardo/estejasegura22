from rest_framework import viewsets
from servicos.api import serializers
from servicos import models

class PessoaViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PessoaSerializer
    queryset = models.Pessoa.objects.all()
    
class PrestadorViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PrestadorSerializer
    queryset = models.Prestador.objects.all()
    

    
    




