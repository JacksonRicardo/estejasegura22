
# Iservices!

## Fatoração e decomposição dos Requisitos funcionais (Cenários) em Casos de Usos (CDU’s):


## CDU: Busca serviço/prestador.
### 1. Descrição
### O usuário acessa o sistema (Iservices!) para fazer sua busca por um serviço ou um prestador de serviço específico.

### 2. Atores
- Cliente - Humano, primário, ativo.

### 3. Pré-condições: Não se aplica

### 4. Pós-condições: 
- Ter encontrado um prestador de serviço.


### 5. Fluxo principal
### 1. O Cliente acessa o sistema (Iservices!) e vai até a opção de “Prestadores de Serviços”;
### 2. O sistema mostra todos os prestadores de serviço cadastrados, apresentando informações básicas de cada prestador de serviço, tais como:
### Gênero;
### Se é um novo prestador cadastrado
### Serviços que oferecem;
### Avaliação de usuários anteriores;
### Nota dada pelas empresas que já contrataram o serviço daquele prestador.
### O sistema também apresenta duas opções de busca dentro de “Prestadores de serviço”, que são: a Busca por descrição do serviço e a Busca por categoria de serviço.

### 6. Fluxo alternativo
- Usuário realiza uma busca específica
### 2A. O Cliente em Prestadores de serviços faz a Pesquisa por descrição do serviço (digitando o serviço ou um prestador de serviço específico)
### 3A. O sistema apresenta o resultado da pesquisa, listando os prestadores para aquele serviço ou mostrando o prestador pesquisado(a).

- Usuário realiza uma busca por categoria 
### 2B. O usuário (Cliente) em Prestadores de serviços faz a busca pela categoria de serviços
### 3B. O sistema apresenta uma lista com os prestadores de serviço cadastrados para cada serviço.

### 7. Situações de erro
- O usuário digita o nome do serviço ou do prestador errado.
### E1. O sistema informa que não existe resultado para a busca realizada e pede para o usuário verificar se a pesquisa está correta.
- O caso de uso retorna ao passo 2 do fluxo principal.

## CDU: Solicitar serviço.
### 1. Descrição
### O usuário solicita um ou mais serviços de algum prestador cadastrados no sistema.

### 2. Atores
- Cliente - Humano, primário, ativo.
- Prestador de serviços - Humano, secundário, passivo.

### 3. Pré-condições 
- O usuário já deve ter realizado uma busca e escolhido um serviço.

### 4. Pós-condições 
- Serviço solicitado pelo cliente.

### Fluxo principal
### 1.O cliente escolhe o serviço que melhor atende às suas necessidades e inicia a solicitação daquele serviço;
### 2.O sistema apresenta um formulário de solicitação do serviço;
### 3. O usuário preenche o formulário e envia a solicitação;
### 4. O sistema pede para o cliente confirmar o preenchimento do formulário e clicar em Enviar solicitação;
### 5. O cliente confirma e envia a solicitação;
### 6. O sistema informa que a solicitação foi realizada com sucesso e retorna a página de todos os prestadores cadastrados. O sistema também notifica o prestador que seu serviço foi solicitado.

### 6. Fluxo alternativo: Não se aplica

### 7. Situações de erro
- O cliente não preenche (deixa em branco) algum campo do formulário de solicitação.
### E1. O sistema informa que algum campo no formulário não foi preenchido e pede para o usuário verificar o formulário.
- O caso de uso retorna ao passo 2 do fluxo principal. 

## CDU: Confirmar solicitação de serviço 
### 1. Descrição
### O prestador de serviço que teve seu serviço solicitado é notificado e o sistema fica aguardando uma resposta de agendamento para repassar ao cliente que realizou a solicitação.

### 2. Atores
- Prestador de serviço – Humano, primário, ativo.
- Cliente – Humano, secundário, passivo.

### 3. Pré-condições 
- O prestador de serviço deverá ter sido notificado.

### 4. Pós-condições 
- O prestador ter feito o agendamento do serviço
- O sistema ter retornado ao Cliente que o serviço solicitado foi agendado

### 5. Fluxo principal

### 1. O prestador de serviço é notificado que seu serviço está sendo solicitado;
### 2. O sistema exibe um pequeno formulário de agendamento, contendo:
- Serviço solicitado;
- Endereço do cliente;
- Dados do cliente;
- Calendário para agendar a data que irá prestar o serviço;
- Um campo para colocar um horário.
### Com as seguintes opções: “Agendar serviço” e “Recusar agendamento”
### 3. O prestador seleciona a opção “Agendar serviço”, preenche o formulário e confirmar o agendamento;
### 4. O sistema pede para confirmar novamente exibindo as informações preenchidas pelo prestador;
### 5. O prestador confirma novamente;
### 6. O sistema guarda esse agendamento, e notifica o cliente da confirmação de sua solicitação.

### 6. Fluxo alternativo
- prestador não agenda/aceita a solicitação
### 3A. O prestador seleciona a opção “Recusar agendamento”;
### 4A. O sistema pede uma breve justificativa da recusa;
### 5A. O prestador informa o motivo (ex.: está com a agenda lotada) e confirma
### 6A. O sistema guarda essa justificativa, e retorna ao usuário que sua solicitação não foi aceita, exibindo o motivo dado pelo prestador de serviço.

### 7. Situações de erro
- prestador de serviço não preenche o formulário de agendamento e tenta confirmar
### E1. O sistema informa que algum campo no formulário não foi preenchido e pede para o usuário verificar o formulário.
- O caso de uso retorna ao passo 2 do fluxo principal. 

## CDU: Avaliar serviço e prestador.
### 1. Descrição
### O sistema quando informado que a visita de um prestador foi realizada pede para o cliente avaliar tanto o serviço quanto o prestador.

### 2. Atores
- Cliente - Humano, primário, ativo.
- restador de serviços - Humano, secundário, passivo.

### 3. Pré-condições 
- O cliente ter contratado um serviço;
- O devido serviço ter sido realizado.

### 4. Pós-condições 
- Avaliação registrada pelo usuário.

### 5. Fluxo principal
### 1. O cliente informa à plataforma que serviço foi realizado.
### 2. O sistema apresenta uma solicitação de avaliação para o serviço que foi prestado e para o prestador, ressaltando sobre a importância da avaliação para a segurança de futuros atendimentos. Apresentando duas opções para a avaliação: “Avaliar agora” e “Avaliar mais tarde”.
### 3. O cliente seleciona a opção “Avaliar agora”.
### 4. O sistema pede uma avaliação de até 5 pontos.
### 5. O usuário realiza a avaliação.
### 6. O sistema apresenta uma tela de comentários, mostrando a importância dos comentários para as pessoas que buscam um atendimento mais seguro e sem medo.
### 7. O usuário registra seu comentário.
### 8. O sistema apresenta mensagem de agradecimento e retorna a tela com todos os prestadores de serviços cadastrados.

### 6. Fluxo alternativo
- O usuário opta por avaliar mais tarde...
### 3A. O usuário seleciona a opção “Avaliar mais tarde”.
- O caso de uso retorna ao passo 8 do fluxo principal.

### Situações de erro
- O usuário não pode avaliar mais de uma vez
### E1. O sistema informa que o usuário já realizou a avaliação, e retorna a página de “Prestadores de serviço” 

## CDU: Interagir em comentários
### 1. Descrição 
### O cliente, cadastrado e logado, poderá interagir nas avaliações feitas por outros clientes.

### 2. Atores 
- cliente – Humano, primário, ativo.

### 3. Pré-condições 
- Cliente estar cadastrado e logado no sistema.

### 4. Pós-condições 
- Cliente curtir um comentário de outro usuário anterior;
- Sistema contabilizar sua curtida no comentário da avaliação do serviço.

### 5. Fluxo principal

### 1. O cliente visualiza um serviço;
### 2. O sistema apresenta as informações daquele serviço, seu prestador e suas avaliações;
### 3. O cliente curte um ou mais comentários das avaliações daquele prestador;
### 4. O sistema contabiliza as curtidas nos comentários, e notifica o prestador.

### 6. Fluxo alternativo: Não se aplica

### 7. Situações de erro
- O usuário curte um comentário que não queria
### E1. O usuário cadastrado e logado “descurte” (retira a curtida que tinha dado) um dos comentários que tinha curtido sem querer
- O caso de uso retorna ao passo 4 do fluxo principal.

## CDU: Cadastrar usuário
### 1. Descrição
### O usuário que for se cadastrar poderá escolher entre: se cadastrar como Cliente ou Prestador de Serviço.

### 2. Atores
- Usuário – Humano, primário, ativo.

3. Pré-condições: Não se aplica

### 4. Pós-condições
- Usuário ter escolhido um tipo de cadastro e ter realizado seu perfil na plataforma.

### 5. Fluxo principal

### 1. O usuário acessa o sistema;
### 2. O sistema exibe a página com a opção de Login e Cadastro;
### 3. O usuário clica em Cadastro;
### 4. O sistema apresenta duas opções:
- Prestador de serviço
- Cliente
### 5. O usuário escolhe a opção que deseja, preenche os campos com seus dados e clica em Criar Perfil;
### 6. O sistema informa que o perfil foi criado com sucesso e exibe o perfil recém criado.


### 6. Fluxo alternativo: Não se aplica

### 7. Situações de erro
- Usuário não realizou cadastro e tentar fazer login
	### E1. O sistema informa que não existe registro daquele usuário na plataforma.
- O caso de uso retorna ao passo 2 do fluxo principal


## CDU: Validar identidade do prestador
### 1. Descrição
### O usuário que será um possível prestador de serviços terá alguns documentos para anexar, para assim o sistema avaliar se esse possível prestador está apto para ser um prestador de serviço dentro da plataforma.

### 2. Atores
- Prestador de serviço – Humano, primário, ativo.

### 3. Pré-condições
- Usuário já deve ter iniciado seu cadastro como prestador de serviços

### 4. Pós-condições
 - Usuário finaliza o cadastro como um possível prestador de serviço;
 - O sistema fica responsável por notificar quando a avaliação estiver completa.

### 5. Fluxo principal
- Estende o CDU “Cadastrar usuário”
### 1. O sistema exibe uma nova página com opções para anexar e envio dos documentos:
### Envio de currículo
- Documento PDF com currículo pessoal que será visto pelos usuários no perfil do profissional
### Foto de perfil com documento com foto (RG, CNH, Passaporte)
- Para verificar se a identidade da pessoa que está se cadastrando é a mesma do documento
### Certidão de antecedentes criminais:
- Disponível no site https://www.gov.br/pt-br/servicos/emitir-certidao-de-antecedentes-criminais
### 2. O usuário realiza o upload dos documentos e clica em “Enviar documentos”.
### 3. O sistema pede para o usuário confirmar;
### 4. O usuário confirma;
### 5. O usuário confirma as informações e clica em “Confirmar envio”
### 6. O Sistema informa que o cadastro entrou em análise dando um prazo para a resposta.


### 6. Fluxo alternativo: Não se aplica

### 7. Situações de erro
- Usuário não anexa os documentos pedidos no formulário e tenta enviar
### E2. O sistema informa que os documentos não foram todos anexados, e pede para o prestador anexar.
- O caso de uso retorna ao passo 1 do fluxo principal ou do fluxo alternativo.





