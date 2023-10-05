**Entidades Principais:**

1. **Salas:** Para cada sala da universidade, você deve armazenar informações como número da sala, capacidade máxima de ocupação, tipo de sala (aula, laboratório, sala de reunião, etc.), recursos disponíveis (projetor, quadro branco, computador, etc.), status de limpeza (limpa ou suja), status de ventilação (funcionando ou não) e disponibilidade de data show.

2. **Reservas:** Cada reserva deve estar associada a uma sala específica. Registre a data e hora de início e término da reserva, o responsável pela reserva (estudante, professor ou funcionário), o motivo da reserva (aula, reunião, evento, etc.) e quaisquer recursos adicionais necessários.

3. **Usuários:** Registre informações sobre os usuários do sistema, como nome, e-mail, e tipo de usuário (estudante, professor, funcionário).

4. **Funcionários de Limpeza:** Registre informações sobre os funcionários de limpeza, como nome, identificação, telefone de contato e credenciais de login. Eles terão permissão especial para gerenciar o status de limpeza das salas e interditá-las, se necessário.

**Relacionamentos e Funcionalidades:**

a) Os professores e alunos devem ter permissão para reservar salas de aula e laboratórios, mas também podem indicar se a sala precisa de limpeza antes ou depois da reserva.

b) Salas podem ser reservadas para um período específico, como uma data e horário de início e término.

c) Os funcionários de limpeza podem acessar informações sobre quais salas precisam de limpeza e interditar uma sala se estiver suja ou não estiver funcionando adequadamente.

d) Os administradores do sistema podem alocar turmas no início do semestre e verificar a disponibilidade das salas, levando em consideração o status de limpeza e ventilação.

e) Mantenha um histórico de todas as reservas anteriores para cada sala, incluindo as informações sobre o status de limpeza e ventilação após cada reserva.

f) Implemente um sistema de autenticação seguro para os usuários e funcionários de limpeza.

g) Os funcionários de limpeza podem atualizar o status de limpeza das salas, indicando se estão limpas ou sujas.

h) Os funcionários de limpeza podem interditar uma sala se ela estiver suja ou se a ventilação não estiver funcionando, impedindo que outras reservas sejam feitas até que o problema seja resolvido.

i) Registre o motivo das reservas e o motivo da interdição das salas para fins de acompanhamento e relatórios.

Esta estrutura expandida permitirá que o sistema de reserva de salas da universidade gerencie não apenas as reservas de salas, mas também o status de limpeza, ventilação e interdição das salas, garantindo um ambiente seguro e limpo para os usuários. Certifique-se de projetar uma interface de usuário intuitiva para facilitar o uso do sistema por todos os envolvidos.
