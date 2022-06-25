# Generated by Django 4.0.5 on 2022-06-15 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cadastrarPrestador', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Especialidade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=40, null=True)),
                ('descricao', models.CharField(max_length=150)),
            ],
        ),
        migrations.RemoveField(
            model_name='cadastrarprestador',
            name='especialidade',
        ),
        migrations.AlterField(
            model_name='cadastrarprestador',
            name='cnpj',
            field=models.CharField(max_length=14, null=True, verbose_name='CNPJ'),
        ),
        migrations.AlterField(
            model_name='cadastrarprestador',
            name='email',
            field=models.CharField(max_length=50, null=True, verbose_name='E-mail'),
        ),
        migrations.AlterField(
            model_name='cadastrarprestador',
            name='genero',
            field=models.CharField(max_length=14, null=True, verbose_name='Gênero'),
        ),
        migrations.AlterField(
            model_name='cadastrarprestador',
            name='nome',
            field=models.CharField(max_length=120, verbose_name='Nome'),
        ),
    ]
