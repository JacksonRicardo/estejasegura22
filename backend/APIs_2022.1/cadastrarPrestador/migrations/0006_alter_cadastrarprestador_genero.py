# Generated by Django 4.0.5 on 2022-06-15 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cadastrarPrestador', '0005_alter_cadastrarprestador_genero'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cadastrarprestador',
            name='genero',
            field=models.CharField(choices=[('F', 'Feminino'), ('M', 'Masculino'), ('O', 'Outro')], max_length=14, null=True),
        ),
    ]