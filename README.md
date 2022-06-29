# IServices 
O IServices é uma aplicação web com o objetivo de simplificar a oferta de serviços para profissionais autônomos e liberais. Com ela qualquer pessoa pode facilmente publicar um anúncio com informações sobre a demanda de serviço que a mesma está demandando. Já os profissionais podem demonstrar interesse em assumir um determinado serviço.

# Documentação 
##### Verifique o diretório da documentação do sistema: 

1. [Documento de Visão](https://github.com/tads-cnat/estejasegura22/blob/main/docs/Documentos%20de%20CDU's%20e%20documento%20de%20vis%C3%A3o/Documento%20de%20vis%C3%A3o-EstejaSegura.pdf)
2. [Protótipos das Telas Principais](https://github.com/tads-cnat/estejasegura22/tree/main/docs/Prot%C3%B3tipos%20das%20Principais%20Telas)
3. [Principais Cenários do Sistema](https://github.com/tads-cnat/estejasegura22/blob/main/docs/Documentos%20de%20CDU's%20e%20documento%20de%20vis%C3%A3o/Refinamento%20dos%20Cen%C3%A1rios_RF01_RF02_RF03.pdf)
4. [Diagrama de Casos de Uso e Diagrama de classes de domínio](https://github.com/tads-cnat/estejasegura22/tree/main/docs/Diagrama%20de%20Classes%20de%20Dom%C3%ADnio%20e%20Classes%20de%20Uso)
5. [Diagrama Classes padrão MVT](https://github.com/tads-cnat/estejasegura22/blob/main/docs/Diagrama%20Classes%20MVT/EstejaSegura_-_MVT.jpg) 
6. [Diagrama de Sequência BCE](https://github.com/tads-cnat/estejasegura22/tree/main/docs/Diagrama%20de%20Sequ%C3%AAncia%20BCE)
7. [Mapeamento entre objetos relacionais, DER e ER](https://github.com/tads-cnat/estejasegura22/tree/main/docs/Mapeamento%20entre%20objetos%20relacionais%2C%20DER%20e%20ER)

## Stack utilizada
**Front-end:** React, Redux, Boostrap

**Back-end:** Python, [Django Rest Framework](https://www.django-rest-framework.org/), swagger

## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Documentação

[Documentação](https://link-da-documentação)


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Equipe
- Franklin Barbosa de Oliveira - franklin.oliveira@escolar.ifrn.edu.br
- Jackson Ricardo dos Santos da Silva - jackson.r@escolar.ifrn.edu.br
- [Lucas Santos - GitHub](https://github.com/lucas-santos)
- Pedro Henrique da Costa Barros - p.barros@escolar.ifrn.edu.br
## Licença

[MIT](https://choosealicense.com/licenses/mit/)
