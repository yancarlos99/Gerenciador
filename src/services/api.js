
/*API DE ONDE TRAZ AS INFORMAÇÕES PARA PREENCHER OS CARDS*/
export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          
          {
            id: 1,
            content: 'Botão que de deve acrescentar mais um card',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },

          {
            id: 1,
            content: 'TESTE 1',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 2,
            content: 'TESTE 2',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 3,
            content: 'TESTE 3 ',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 5,
            content: 'Teste',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Teste',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'TESTE ',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }