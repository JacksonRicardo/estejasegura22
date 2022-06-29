# Documento de Visão

# Iservices!	

### 1.	Resumo 
#### O presente documento tem por finalidade o entendimento sobre o projeto Iservices! definindo as necessidades para o desenvolvimento deste projeto, que se trata de um sistema para unir Usuários e Prestadores  de qualquer tipo de serviço, que possa ser integrado à plataforma. Na medida do possível, as informações terão um alto nível de abstração para melhor entendimento dos envolvidos, além da contextualização do sistema em exemplos que seguirão.

#### O nosso projeto é uma aplicação Web com o intuito de ofertar serviços, aos profissionais que queiram ser integrados ao nosso Sistema, temos a finalidade de, na parte dos Prestadores, simplificar a divulgação dos serviços, e na parte dos Usuários a facilidade da contratação de determinado serviço.
#### No Iservices! utilizamos políticas de autenticação para confirmar a identidade dos Prestadores de Serviço e Usuários, como por exemplo: todos os usuários precisam preencher o cadastro com o CPF para evitar perfis falsos, prestadores de serviço precisam de documento de identificação (CPF) para pessoas físicas,  para empresas  o CNPJ. 

#### E, também dispomos de uma avaliação detalhada, para o usuário saber mais sobre o Prestador e o serviço para assim ter mais confiança na contratação. Não podemos esquecer que os prestadores também podem avaliar seus clientes, e vice-versa para uma melhor experiência e promover o respeito mútuo entre Usuários e Prestadores de Serviços.
	
### 2.	Perfil dos Usuários 
#### Pessoas interessadas em receber serviços qualificados de Prestadores que prestem ótimos serviços, levando em consideração a sua nota em geral, a verificação da conta e o tempo de serviço que trabalha na Plataforma. Devido a isso, usamos esses métodos para que os clientes possam escolher os serviços que melhor se encaixem com seu perfil e necessidade, e sintam mais confiança na contratação. 

#### O Iservices! tem seu foco principal nas pessoas que queiram contratar algum tipo de serviço. E também, nas empresas e prestadores de serviço que buscam oferecer um serviço de qualidade e com maior confiança para os seus clientes/usuários. 

### 3.	Problema 
#### A dificuldade de muitas vezes encontrar serviços com qualificação e tempo médio de atuação de tal profissional. Sabemos que a qualificação e o respeito andam atreladas uma com a outra, sendo isso que os nossos clientes esperam, no Iservices você encontra isso que procura. Estamos dispostos a descomplicar a vida para ambos os lados.

#### Sempre que pensamos em serviços, nos deparamos com dificuldades, por exemplo: o tempo que certamente irei levar para encontrar um profissional, o deslocamento e os gastos que essas dificuldades podem gerar. Dentro do Iservices fazemos, somos a solução do seu problema, porque buscamos simplificar e facilitar para que os clientes e prestadores economizem tempo e dinheiro.

#### A nossa plataforma de serviços ela cuida da parte do contato entre cliente e prestador, o agendamento combinado entre ambos os lados, gerando a notificação de serviço, o orçamento previamente combinado, e por fim, a avaliação gerada para nossos clientes sejam clientes ou prestadores. O que antes era um problema, agora pode ser a sua solução.

### 4.	Escopo 
#### O Iservices! É um Sistema Web de Cadastramento de pessoas, com a identificação autêntica, evitando problemas de perfis fantasmas, todavia existem diversas plataformas onde os usuários fazem o cadastramento sem usar a identificação padrão, porque a plataforma não solicita, abrindo uma brecha para fazerem ações ilícitas e não serem descobertos. 

#### Buscamos profissionais qualificados para o atendimento ao público que deseja tranquilidade a mais para aqueles que precisam solicitar serviços. Fazemos isso com a finalidade de ajudar em contratar qualquer serviço que busque localizar profissionais qualificados para o atendimento específico ao público,  por exemplo: um bom encanador. 

### 4.1.	O Iservices! é…
-	Um sistema que ajuda as pessoas a receber prestadores de serviços em suas casas;

### 4.2.	O Iservices! não é… 
-	Um sistema de SOS, visto que a plataforma já garante previamente uma confiança a mais ao público que irá utilizá-la devido.
-	Uma rede social de busca para os usuários, como o Facebook.

### 4.3.	O Iservices! faz… 
-	Passa mais confiança aos usuários que irão usar o sistema Iservices!

### 4.4.	O Iservices! não faz… 
-	Não faz restrição de público, qualquer pessoa/empresa que cumpra nossas diretrizes poderá utilizar a Plataforma.
-	Não envia e-mails ou SMS, solicitando dados bancários ou senhas.

### 5.	Serviços externos (APIs) 
#### Levando em consideração o nosso Sistema Web, que por sua vez, possui a finalidade de contratar pessoas capazes de prestarem serviços com um bom nível de qualificação. Pensando nesses requisitos, consideramos que as APIs capazes de agregar-se ao Iservices, são, a primeira delas sendo “API de dados agregados do IBGE”, a ferramenta disponibiliza dados das pesquisas e censos realizados pelo IBGE, retornando informações de grupos de classes trabalhadoras do país. E, a segunda API o”Fala.Br” da Controladoria Geral da União, a partir dessa API gostaríamos de retornar todas as profissões, com as informações mais importantes vinculadas. 

#### As possíveis tecnologias para o Front-end que gostaríamos de incorporar ao Django são o React.js e Bootstrap, tendo mais preferência ao React, por ela dá suporte de classes e modularização, isso pois ela tem uma linguagem equivalente as linguagens clássicas, como Java ou Python, tornando a aplicação mais robusta e fácil de implementar novas funcionalidades, pela equivalência das linguagens. E Back-end será explorando o Django REST framework  e o estudo melhorado do Python.

### 6.	Requisitos funcionais

| Código|  Nome                            |  Descrição                                          |
| ------| ---------------------------------| ----------------------------------------------------| 
| RF01  |  Busca serviço/prestador         | O usuário poderá fazer uma busca por serviços e/ou prestador de serviços que mais se encaixa na sua necessidade.            | 
| RF02  |  Solicitar serviço               | O usuário solicita um serviço de um prestador escolhido com base nas avaliações que o mesmo possui em seu perfil. A solicitação é uma demonstração de interesse que requer uma confirmação.| 
| RF03  |  Contratar serviço               | O usuário poderá, de fato, contratar um serviço após um contato prévio com o prestador e ambos estiverem de acordo. |
| RF04  |  Avaliar serviço e prestador     | Cada prestador de serviço poderá ser avaliado e ter seu serviço avaliado pelos usuários, não sendo obrigatória esta avaliação para o usuário.     | 
| RF05  |  Interagir em comentários        | Os usuários, cadastrados e logados na plataforma, poderão curtir comentários de avaliações feitas de outros usuários nos serviços dos prestadores.    | 
| RF06  |  Cadastrar usuário               | A pessoa que for se cadastrar no Iservices! Poderá escolher entre: se cadastrar como Cliente ou Prestador de Serviço.    | 
| RF07  |  Autenticar Cliente              | Para poder fazer a solicitação de um ou mais serviços o usuário cadastrado deverá realizar o login, informando seu usuário e senha.    | 
| RF08  |  Autenticar Prestador            | O prestador autenticado/logado poderá ver possíveis anúncios de clientes precisando de algum serviço, além de poder confirmar a prestação de seus serviços a um determinado cliente.    | 
| RF09  |  Gerenciar perfil                | O usuário cadastrado, tanto os prestadores como os clientes, podem atualizar os dados de seu perfil e/ou excluir sua conta do sistema. | 
| RF10  |  Validar identidade do prestador | Os prestadores de serviços cadastrados deverão a cada período cadastrado atualizar seus dados para manter-se ativo como prestador de serviço. Atualizando seus documentos exigidos no ato do primeiro cadastro na plataforma. | 
| RF11  |  Confirmar solicitação de serviço| O prestador que teve seu serviço solicitado é notificado e o sistema espera até que ele confirme o agendamento do serviço para o cliente. | 


### 7. Requisitos não-funcionais 
| Código|  Nome                            |  Descrição                                          |
| ------| ---------------------------------| ----------------------------------------------------| 
| RNF01  |  Implementação | Tem uso em várias aplicações e é considerada uma ótima alternativa para criação de app web de forma simples e poderosa. Tendo como os dois principais frameworks o Django e o Flask.  | 
| RNF02  |  Padrões | Um framework de desenvolvimento rápido para web, com arquitetura relativamente simples. Usa um padrão de projeto MTV e toda a arquitetura é interligada e conversa entre si. | 
| RNF03  |  Plataforma Web |A aplicação do sistema deve ser Web, com funcionalidades de cadastro, solicitação e avaliação. |
| RNF04  |  Usbabilidade | Uso de Design responsivo nas interfaces gráficas, se adequando a diferentes browsers e mantendo o design responsivo, com a facilidade de aprender e facilidade de usar a plataforma. | 
| RNF05  |  Compatibilidade | Compatibilidade com sistemas operacionais Windows e Linux. | 
| RNF06  |  Segurança| As informações prestadas pelos usuários são sigilosas, sendo utilizada a validação no sistema por documentos comprobatórios como para verificação da identidade do usuário. | 
| RNF07  |  Integridade | Apenas usuários com o perfil de prestador poderão visualizar, a aba Clientes que solicitaram os serviços e a aba Cadastrar especialidades.   | 
| RNF08  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.   | 

### 8. Regras de negócio 
#### [RN1] A cada ano, os prestadores(as) de serviço terão que atualizar as certidões, enviando novamente os documentos requisitados. A cada ano ele terá que atualizar as certidões.
#### [RN2] Os documentos que não forem enviados no prazo de uma hora, o link irá expirar, tendo que fazer novamente a solicitação pelo sistema.
#### [RN3] O usuário poderá buscar por prestadores sem estar autenticado, no entanto para realizar a solicitação terá que estar autenticado.
#### [RN4] Apenas o Administrador poderá validar os documentos comprobatórios dos prestadores de serviços e dos usuários.  
#### [RN5] Apenas o Administrador poderá cadastrar as especialidades escolhidas pelos prestadores(as) de serviço na hora do cadastro.
#### [RN6] Um usuário (cliente) poderá avaliar um serviço e seu prestador quando o serviço for prestado.
#### [RN7] O prestador de serviço poderá ser uma pessoa Física ou uma pessoa Jurídica, dependendo em que categoria se encaixe melhor.
#### [RN8] Um prestador de serviço só estará disponível para prestar seu serviço depois que seus documentos forem analisados e aceitos pelo administrador. 
#### [RN9] Os usuários só poderão contratar um serviço se o prestador confirmar o agendamento de tal serviço.
#### [RN10] O prestador de serviço não será notificado, quando um cliente realizar uma avaliação do seu atendimento, a fim de manter o sigilo dos usuários. No entanto, o mesmo poderá acompanhar as suas notas de avaliação no seu perfil.

### Casos de uso 
### 9.1. Diagrama de casos de uso

![CDU](https://user-images.githubusercontent.com/42697964/176502804-f2c6cb4d-4623-4535-b8a8-8b76bc05a344.jpg)

### 9.2. Descrição dos casos de uso

| Código|  Nome                            |  Descrição                                          |
| ------| ---------------------------------| ----------------------------------------------------| 
| CDU-01  |  Implementação | Tem uso em várias aplicações e é considerada uma ótima alternativa para criação de app web de forma simples e poderosa. Tendo como os dois principais frameworks o Django e o Flask.  | 
| CDU-02  |  Padrões | Um framework de desenvolvimento rápido para web, com arquitetura relativamente simples. Usa um padrão de projeto MTV e toda a arquitetura é interligada e conversa entre si. | 
| CDU-03  |  Plataforma Web |A aplicação do sistema deve ser Web, com funcionalidades de cadastro, solicitação e avaliação. |
| CDU-04  |  Usbabilidade | Uso de Design responsivo nas interfaces gráficas, se adequando a diferentes browsers e mantendo o design responsivo, com a facilidade de aprender e facilidade de usar a plataforma. | 
| CDU-05  |  Compatibilidade | Compatibilidade com sistemas operacionais Windows e Linux. | 
| CDU-06  |  Segurança| As informações prestadas pelos usuários são sigilosas, sendo utilizada a validação no sistema por documentos comprobatórios como para verificação da identidade do usuário. | 
| CDU-07  |  Integridade | Apenas usuários com o perfil de prestador poderão visualizar, a aba Clientes que solicitaram os serviços e a aba Cadastrar especialidades.   | 
| CDU-08  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-09  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-10  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-11  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-12  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-13  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-14  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 
| CDU-15  |  Suporte| Suporte a plataforma será feito de forma remota, após ser notificado da falha no sistema a equipe de desenvolvimento irá trabalhar na manutenção do erro. Sendo o usuário avisado previamente que algum serviço poderá ser interrompido por determinado período.  | 




