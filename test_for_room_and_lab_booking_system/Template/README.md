# Levantamento de Requisitos

## Sistema de Reserva de Salas/Laboratórios (UFRB)

### Objetivos Gerais

O objetivo deste sistema é permitir a reserva, autorização e controle do acesso às salas e laboratórios da UFRB no campus de Cruz das Almas. O projeto visa criar a interface gráfica, a API e o banco de dados do sistema.

### Atores do Sistema

- Alunos
  - Realiza cadastro/login no sistema
  - Reserva uma sala/laboratório no sistema

- Professores
  - Realiza cadastro/login no sistema
  - Reserva uma sala/laboratório no sistema
  - Permite acesso dos alunos às salas/laboratórios da UFRB

- Funcionários Terceirizados
  - Realiza cadastro/login no sistema
  - Realiza a limpeza/administração das salas/laboratórios
  - Verifica as necessidades específicas das salas/laboratórios
  - Faz observações em relação às salas/laboratórios
  - Checa as reservas das salas/laboratórios
  - Registra os acessos das salas/laboratórios

- Técnicos Administrativos
  - Checa as reservas das salas/laboratórios
  - Registra os acessos das salas/laboratórios
  - Verifica as necessidades específicas das salas/laboratórios
  - Faz observações em relação às salas/laboratórios

### Requisitos Funcionais (Casos de Uso)

- [RF001] O sistema deve permitir o cadastro de alunos, coletando os dados de e-mail, nome, matrícula, contato, e seu número identificador será sua matrícula.

- [RF002] O sistema deve permitir o cadastro de professores, coletando os dados de e-mail, nome, contato, siap (ou matrícula de acesso do SIGAA), e seu número identificador será seu siap.

- [RF003] O sistema deve permitir o cadastro de técnicos administrativos, coletando os dados de e-mail, nome, contato, e seu número identificador será o ID de registro.

- [RF004] O sistema deve permitir o cadastro de funcionários terceirizados, coletando os dados de e-mail, nome, contato, e seu número identificador será o ID de registro.

- [RF005] O sistema deve permitir o login de todos os atores cadastrados que possuírem cadastro prévio e ativação do cadastro. O login deve ser feito por meio do identificador e da senha cadastrada no sistema.

- [RF006] O sistema deve permitir a recuperação da senha, sendo necessário o registro do e-mail utilizado no momento do cadastro.

- [RF007] O sistema deve permitir o cadastro de salas/laboratórios, coletando informações como número da sala, capacidade máxima de ocupação, tipo de sala (aula, laboratório, etc.), recursos disponíveis (projetor, climatização, tomadas, iluminação), status de limpeza (Limpo, Limpando ou Sujo), e observações (informações extras sobre funcionamento ou condições dos recursos).

- [RF008] O sistema deve permitir a atualização das informações cadastradas das salas/laboratórios. Os professores, funcionários terceirizados e técnicos administrativos podem solicitar alterações de informações sobre as salas/laboratórios. As alterações devem ser autorizadas por funcionários específicos.

- [RF009] O sistema deve registrar as informações das reservas, incluindo data, horário de início e duração, quem reservou, o horário da reserva, e registrar a devolução das chaves.

- [RF010] O sistema deve registrar as informações sobre quais salas/laboratórios os alunos podem acessar. Isso deve permitir que técnicos administrativos e terceirizados visualizem quais salas/laboratórios os alunos possuem permissão de acesso. Cada reserva deve estar associada a uma sala específica, registrando a data e hora de início e término da reserva, o responsável pela reserva (estudante, professor ou funcionário), o motivo da reserva (aula, reunião, evento, etc.) e quaisquer recursos adicionais necessários.

- [RF011] O sistema deve permitir que os alunos solicitem acesso a determinada sala/laboratório. Todos os alunos podem solicitar o acesso a qualquer sala e laboratório, fornecendo a data, horário e sala desejados, e o professor responsável por permitir o acesso. Após o pedido ser feito, cabe ao professor autorizar ou não o acesso do aluno. Após o aluno ter seu acesso liberado, ele receberá um e-mail de confirmação.

- [RF012] O sistema deve permitir que funcionários terceirizados e técnicos administrativos visualizem as reservas feitas.

### Sugestões de Atualização

- "Token na chave, chaveiro com QRCode, que ao usuário escanear já preenche automaticamente as informações da sala servido para reserva e devolução, e se for uma turma recorrente, registrada por técnicos administrativos basta escanear e será registrado o uso da sala para o período já registrado."
