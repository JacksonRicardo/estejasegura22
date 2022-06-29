# IServices 
O IServices é uma aplicação web com o objetivo de simplificar a oferta de serviços para profissionais autônomos e liberais. Com ela qualquer pessoa pode facilmente publicar um anúncio com informações sobre a demanda de serviço que a mesma está demandando. Já os profissionais podem demonstrar interesse em assumir um determinado serviço.

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
