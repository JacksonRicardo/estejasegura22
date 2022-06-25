from django.db import models
from django.conf import settings

# Create your models here.
class Pessoa(models.Model):
    genero = [
        ["Feminino", "F"], #sigla da especialidade para ocupar menos espaço no banco
        ["Masculino", "M"],
        ["Outro", "O"]
    ]
    #genero = models.CharField(max_length=14, null=True)
    nome = models.CharField(max_length = 100)
    genero = models.CharField(max_length = 14, choices=genero, null=True)
    email = models.CharField(max_length = 100)

    def __str__(self):
        return self.nome  
    class Meta:
        verbose_name_plural= 'Pessoas'

class Telefone(models.Model):
    numero = models.CharField(max_length = 12)
    #mapeamento/relacionamento da classe Pessoa (tipo: muitos_para_um)
    pessoa = models.ForeignKey(Pessoa, on_delete = models.CASCADE)

    def __str__(self):
        return self.numero

class Endereco(models.Model):
    rua = models.CharField(max_length=100)
    numero = models.CharField(max_length=6)
    bairro = models.CharField(max_length=20)
    cidade = models.CharField(max_length=20)
    complemento = models.CharField(max_length=120, null=True)
    estado = models.CharField(max_length=100)
    cep = models.CharField(max_length=8)
    #mapeamento/relacionamento da classe Pessoa (tipo: um_para_um)
    pessoa = models.OneToOneField(Pessoa, on_delete=models.CASCADE, null=True)
    
class Especialidade(models.Model):
    nome = models.CharField(max_length=40, null=True)
    descricao = models.CharField(max_length=150)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Endereço'
    def __str__(self):
        return self.rua
    
class Cliente(Pessoa):
    cpf = models.CharField(max_length=11)
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete = models.CASCADE,
        null = True,
    )
    
class Prestador(Pessoa):
    cnpj = models.CharField(max_length=14, null=True)
    Especialidades = (
    ('Encanador', 'Encndr' ), #Sigla para diminuir espaço no banco
    ('Motoboy', 'Mtby' ),
    ('Designer', 'Dsgnr'),
    ('Eletricista', 'Eltrst'),
    ('Motorista', 'Mtrst'),
    ('Pintor', 'Pntr'),
  )
    especialidade = models.CharField(max_length=40, choices=Especialidades, default='Prestador')
    # mapeamento/relacionamento da classe Especialidade (tipo: muitos_para_muitos)
    # especialidades =  models.ManyToManyField(Especialidade)

    class Meta:
        verbose_name_plural= 'Prestadores'
        
class Documento(models.Model):
    nome = models.CharField(max_length=100)
    localhost = models.CharField(max_length=50)
    #mapeamento/relacionamento da classe Prestador (tipo:muitos_para_um)
    prestador = models.ForeignKey(Prestador, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.nome
    
class Servicos(models.Model):
    nome = models.CharField(max_length=40, null=True)
    prestacao = models.DateField(auto_now=True)
    limite = models.DateField(auto_now=True)
    descricao = models.TextField(null=True)

    #mapeamento/relacionamento da classe Prestador (tipo: muitos_para_um)
    prestador = models.ForeignKey(Prestador, on_delete=models.CASCADE, null=True)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.descricao
    class Meta:
        verbose_name = 'Serviços'

class Avaliacao(models.Model):
    avaliar_servicos = models.IntegerField(default=0)
    avaliar_prestador = models.IntegerField(default=0)
    comentario = models.TextField(null=True)
    data_hora = models.DateTimeField('Data da Avaliação', null=True)
    #mapeamento/relacionamento da classe Cliente (tipo: muitos_para_um)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, null=True)
    #mapeamento/relacionamento da classe Serviços (tipo: um_para_um)
    servicos = models.OneToOneField(Servicos, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.comentario
    class Meta:
        verbose_name = 'Avaliação'
        verbose_name_plural = 'Avaliações'