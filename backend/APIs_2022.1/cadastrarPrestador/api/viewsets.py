from rest_framework import viewsets
from cadastrarPrestador.api import serializers
from cadastrarPrestador import models

class CadastrarPrestadorViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CadastrarPrestadorSerializer
    queryset = models.cadastrarPrestador.objects.all()