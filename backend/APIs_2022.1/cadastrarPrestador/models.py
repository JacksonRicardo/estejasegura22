from django.db import models

class cadastrarPrestador(models.Model):
    genero = [
        ("F", "Feminino"), 
        ("M", "Masculino"),
        ("O", "Outro")
    ]
    nome = models.CharField('Nome',max_length=120)
    genero = models.CharField(max_length = 14, choices=genero, null=True)
    cnpj = models.CharField('CNPJ',max_length=14, null=True)
    email = models.CharField('E-mail',max_length=50, null=True)
    especialidade = models.CharField(max_length=40, default='Prestador')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural= 'Prestadores de Serviços'