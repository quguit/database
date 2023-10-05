
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
- [RF001] O sistema deve permitir o cadastro de alunos:
  - O sistema deve permitir o cadastro dos alunos, coletando os dados necessários. O número identificador será a matrícula.
- [RF002] O sistema deve permitir o cadastro de professores:
  - O sistema deve permitir o cadastro dos professores, coletando os dados necessários. O número identificador será o SIAP.
- [RF003] O sistema deve permitir o cadastro de técnicos administrativos:
  - O sistema deve permitir o cadastro de técnicos administrativos, coletando os dados necessários. O número identificador será definido posteriormente.
- [RF004] O sistema deve permitir o cadastro de funcionários terceirizados:
  - O sistema deve permitir o cadastro de funcionários terceirizados, coletando os dados necessários. O número identificador será definido posteriormente.
- [RF005] O sistema deve permitir o login de todos os atores cadastrados:
  - O sistema deve permitir o login de todos os atores com cadastro prévio e ativação. O login será feito usando o identificador e senha cadastrados.
- [RF006] O sistema deve permitir a recuperação da senha:
  - O sistema deve permitir a recuperação da senha de qualquer usuário, utilizando o email cadastrado.
- [RF007] O sistema deve permitir o cadastro de salas/laboratórios:
  - O sistema deve permitir que o responsável cadastre salas e laboratórios, incluindo informações como capacidade, estado de conservação, estado de limpeza, equipamentos e estado dos equipamentos.
  - O cadastro deve ser realizado pelo responsável.
- [RF008] O sistema deve permitir a atualização das informações cadastradas das salas/laboratórios:
  - O sistema deve permitir que professores, funcionários terceirizados e técnicos administrativos atualizem informações sobre as salas/laboratórios.
  - Algumas informações só podem ser alteradas por funcionários específicos.
- [RF009] O sistema deve registrar as informações das reservas e acessos:
  - O sistema deve registrar reservas, datas de reserva, quem reservou, horários e se a chave foi devolvida.
- [RF010] O sistema deve registrar as informações de quais salas/laboratórios os alunos podem acessar:
  - O sistema deve permitir que técnicos administrativos e terceirizados visualizem as permissões de acesso dos alunos.
- [RF011] O sistema deve permitir que alunos solicitem acesso a determinadas salas/laboratórios:
  - Todos os alunos podem solicitar acesso a qualquer sala/laboratório, informando data, horário, sala desejada e o professor responsável.
  - A autorização do acesso é feita pelo professor, e o aluno recebe uma confirmação por email após a liberação.
- [RF012] O sistema deve permitir que funcionários terceirizados e técnicos administrativos visualizem as reservas feitas.
