
# Levantamento de Requisitos - Sistema de Reserva de Salas/Laboratórios (for UFRB)

## Objetivos Gerais
O objetivo deste sistema é permitir a reserva, autorização e controle do acesso às salas e laboratórios da UFRB no campus de Cruz das Almas. O projeto visa criar a interface gráfica, a API e o banco de dados do sistema.

## Atores do Sistema
- **Alunos**
  - Realiza cadastro/login no sistema
  - Reserva uma sala/laboratório no sistema
- **Professores**
  - Realiza cadastro/login no sistema
  - Reserva uma sala/laboratório no sistema
  - Permite acesso dos alunos às salas/laboratórios da UFRB
- **Funcionários Terceirizados**
  - Realiza cadastro/login no sistema
  - Realiza a limpeza/administração das salas/laboratórios
  - Verificam as necessidades específicas das salas/laboratórios
  - Fazem observações em relação às salas/laboratórios
  - Checam as reservas das salas/laboratórios
  - Registram os acessos das salas/laboratórios
- **Técnicos Administrativos**
  - Checam as reservas das salas/laboratórios
  - Registram os acessos das salas/laboratórios
  - Verificam as necessidades específicas das salas/laboratórios
  - Fazem observações em relação às salas/laboratórios

## Requisitos Funcionais (Casos de Uso)

- [RF001] O sistema deve permitir cadastro de alunos tomando os dados de e-mail, nome, matrícula, contato e seu número identificador será sua matrícula. 

- [RF002] O sistema deve permitir cadastro de professores, tomando os dados de e-mail, nome, contato, siap(ou matrícula de acesso do sigaa) e seu número identificador será seu siap.

- [RF003] O sistema deve permitir cadastro de técnicos administrativos, tomando os dados de email, nome, contato, cpf, e seu número identificador será cpf.


- [RF004] O sistema deve permitir cadastro de funcionários terceirizados tomando os dados de email, nome, contato e seu número identificador será ID de registro.


- [RF005] O sistema deve permitir o login de todos os atores cadastrados que possuírem cadastro prévio, e que possuem ativação do cadastro. O login deve ser feito por meio do identificador e da senha cadastrada no sistema.
  - Após o cadastro deverá ser enviado um e-mail avisando que o cadastro foi feito corretamente.
  - Após o cadastro deverá ser enviado um e-mail avisando que o cadastro deve ser ativado


- [RF006] O sistema deve permitir a recuperação da senha, para isso deve ser necessário o registro do e-mail utilizado no momento do cadastro.


- [RF007] O sistema deve permitir o cadastro de salas/laboratórios, é necessário saber número da sala, capacidade máxima de ocupação, tipo de sala (aula, laboratório, etc.), recursos disponíveis (projetor, climatização, tomadas, iluminação), status de limpeza (Limpo, Limpando ou Sujo), observações(informações extras sobre funcionamento ou condições dos recursos).
  - O cadastro de salas é uma prerrogativa dos técnicos administrativos.
		
- [RF008] O sistema deve permitir a atualização das informações cadastradas das salas/laboratórios. Os professores, funcionários terceirizados e técnicos administrativos podem solicitar alteração de informações sobre as salas/laboratórios.
  - As alterações devem ser autorizadas por funcionários específicos


- [RF009] O sistema deve registrar as informações das reservas, data, horário de início e duração, quem reservou, o horário da reserva, e ao final registrar a devolução das chaves.
Cada reserva deve possuir um token para facilitar a sua visualização.
  - O token expira após a data de término da reserva.


- [RF010] O sistema deve registrar as informações de quais salas/laboratórios os alunos podem acessar.
  - O sistema deve permitir que técnicos administrativos e terceirizados visualizem quais salas/laboratórios os alunos possuem permissão de acesso.
  - Cada reserva deve estar associada a uma sala específica. Registre a data e hora de início e término da reserva, o responsável pela reserva (estudante, professor ou funcionário), o motivo da reserva (aula, reunião, evento, etc.) e quaisquer recursos adicionais necessários.


- [RF011] O sistema deve permitir que alunos solicitem acesso à determinada sala/laboratório
Todos os alunos podem solicitar o acesso a qualquer sala e laboratório, para isso ele deve logar no sistema e inserir qual a data, horário e sala que ele deseja e qual professor responsável por permitir o acesso.
  - Após o pedido ser feito, cabe ao professor autorizar ou não o acesso do aluno.
  - Após o aluno ter seu acesso liberado, ele receberá um e-mail confirmando.


- [RF012] O sistema deve permitir que Funcionários terceirizados e técnicos administrativos visualizem as reservas feitas.
  - Os responsáveis por gerir as reservas devem poder conferir a reserva por meio do seu token de reserva
  - A visualização irá permitir ver o status da reserva, sua data, horário, quem fez a reserva

