# React Native Appointment Scheduler

Este é um aplicativo de agendamento construído em React Native e expo. O aplicativo possui cinco telas principais para facilitar a navegação e a gestão de compromissos. Para proporcionar uma experiência completa ao usuário, mesmo sem um backend, as informações são armazenadas em cache usando AsyncStorage.

## Telas do Aplicativo

1. **Serviços**: Lista todos os serviços disponíveis, com filtro e variação na disposição da lista.
2. **Agendar**: Permite ao usuário selecionar um local, quantidade de comodos e direciona para agendar um horário.
3. **Serviço**: Um modal de agendamento onde é possivel selecionar uma data e horário.
4. **Agendamentos (vazio)**: Mostra uma tela informando que não há agendamentos feitos.
5. **Agendamentos**: Lista todos os agendamentos feitos pelo usuário.

## Bibliotecas Utilizadas

As seguintes bibliotecas foram instaladas e utilizadas no projeto:

- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage): Para armazenamento de dados em cache.
- [date-fns](https://date-fns.org/): Para manipulação e formatação de datas.
- [react-native-calendars](https://github.com/wix/react-native-calendars): Para exibição de calendários.
- [react-native-uuid](https://github.com/eugenehp/react-native-uuid): Para geração de UUIDs.
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/): Para criar gradientes lineares.
- [@react-native-community/datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker): Para seleção de horários.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/beseabra/guato.git
   cd guato

   ```

2. Instale as dependências:
   npm install

3. Execute o projeto:
   npm start

## Uso

Serviços
A tela de Serviços lista todos os serviços disponíveis. Cada serviço pode ser selecionado para visualizar mais detalhes ou agendar um horário.

## Agendar

Na tela de Agendar, o usuário pode selecionar um serviço, escolher uma data e horário usando o DateTimePicker, e confirmar o agendamento. Os dados são então salvos em cache usando AsyncStorage.

## Serviço

A tela de Serviço exibe detalhes específicos sobre o serviço selecionado.

## Agendamentos (vazio)

Se não houver agendamentos, esta tela informará o usuário de que não há compromissos agendados.

## Agendamentos

Esta tela lista todos os agendamentos feitos pelo usuário, permitindo visualizar detalhes de cada um. Além disso ao utilizar o botão "call" o redirecionamento para a tela de discagem android é realizada.
