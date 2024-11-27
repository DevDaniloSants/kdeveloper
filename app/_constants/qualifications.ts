import { v4 as uuidv4 } from 'uuid';

export interface Qualification {
    id: string;
    title: string;
    description: string;
    institution: string;
    data: Date;
}

export interface Developer {
    id: string;
    name: string;
    role: string;
    qualifications: Qualification[];
}

export const QUALIFICATIONS_DATA: Developer[] = [
    {
        id: uuidv4(),
        name: 'Danilo Santos',
        role: 'Desenvolvedor Full Stack',
        qualifications: [
            {
                id: uuidv4(),
                title: 'Desenvolvedor Full Stack',
                description:
                    'Formação imersiva com mais de 400 horas em desenvolvimento web, abrangendo front-end, back-end e modelagem de dados. Além das competências técnicas como React, Node.js, SQL e metodologias ágeis, o programa impulsiona habilidades soft essenciais, como design thinking, gestão de tempo e postura profissional, preparando para desafios reais no mercado de tecnologia.',
                institution: 'Resília',
                data: new Date(2023, 4),
            },
            {
                id: uuidv4(),
                title: 'HTML5',
                description:
                    'Curso introdutório ao HTML5, cobrindo conceitos fundamentais para construção de páginas web estruturadas.',
                institution: 'OneBitCode',
                data: new Date(2023, 11),
            },
            {
                id: uuidv4(),
                title: 'CSS3',
                description:
                    'Curso focado em estilização de páginas web, cobrindo conceitos de layout responsivo, animações, transições e boas práticas de design.',
                institution: 'OneBitCode',
                data: new Date(2023, 11),
            },
            {
                id: uuidv4(),
                title: 'Git e GitHub',
                description:
                    'Domínio essencial de Git e GitHub: controle de versão, uso do terminal, branchs, merges e integração com repositórios online. Um curso completo para aprimorar a colaboração em projetos e impulsionar a produtividade no desenvolvimento de software.',
                institution: 'OneBitCode',
                data: new Date(2023, 11),
            },
            {
                id: uuidv4(),
                title: 'Javascript I,II,III,IV, V e VI',
                description:
                    'Domínio aprofundado em JavaScript, abrangendo fundamentos, manipulação de DOM, padrões modernos, Programação Orientada a Objetos e tópicos avançados como assincronicidade e consumo de APIs. Experiência prática em criação de projetos, aplicações interativas e soluções escaláveis.',
                institution: 'OneBitCode',
                data: new Date(2023, 11),
            },
            {
                id: uuidv4(),
                title: 'Fundamentos React',
                description:
                    'Domínio dos fundamentos do React, incluindo Virtual DOM, JSX, criação e reutilização de componentes, gerenciamento de dados dinâmicos, estilização, manipulação de eventos, uso avançado de props, controle de inputs, Hooks e estratégias de compartilhamento de estado para interfaces modernas e eficientes.',
                institution: 'OneBitCode',
                data: new Date(2023, 11),
            },
            {
                id: uuidv4(),
                title: 'Sass',
                description:
                    'Profundo entendimento do Sass, abordando desde a instalação e configuração até técnicas avançadas como variáveis, nesting, mixins, extends, funções e boas práticas para otimização e organização do código, proporcionando maior performance e manutenção eficiente do design.',
                institution: 'OneBitCode',
                data: new Date(2023, 12),
            },
            {
                id: uuidv4(),
                title: 'ReactPRO',
                description:
                    'Domínio nas ferramentas e frameworks modernos de desenvolvimento, incluindo React, Git & GitHub, Node.js (compreendendo conceitos assíncronos e integração com Express), JavaScript ES6+, TypeScript e Redux (com Thunk e Toolkit). Experiência com React Router, Context API, integração com Firebase, Stripe, além de testes em aplicações React. Proficiente em garantir qualidade de código com Prettier, ESLint e Husky. Experiência em deploy de aplicações e construção de sistemas escaláveis e eficientes.',
                institution: 'FullStack Club',
                data: new Date(2024, 6),
            },
            {
                id: uuidv4(),
                title: 'Desenvolvedor Full Stack',
                description:
                    'Experiência como Full Stack Developer com sólida compreensão de Node.js e programação assíncrona, além de domínio de Docker e bancos de dados relacionais como PostgreSQL e SQL. Capacidade comprovada em desenvolver APIs robustas com Node.js, Express e PostgreSQL, realizar testes automatizados utilizando Jest e Supertest, e documentar APIs com Swagger. Conhecimento em processos de deploy de APIs com Docker, integração contínua e entrega contínua (CI/CD) utilizando GitHub Actions para automação de workflows e deployment.',
                institution: 'FullStack Club',
                data: new Date(2024, 10),
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Kaio Melo',
        role: 'Desenvolvedor Backend',
        qualifications: [
            {
                id: uuidv4(),
                title: 'Técnico em Informática',
                description:
                    'Formação técnica abrangendo habilidades em operação de sistemas operacionais Windows e Linux, aplicativos do Microsoft Office, navegação na internet, manutenção de hardware e software, e desenvolvimento de programas em PHP e Java.',
                institution: 'Senac RJ',
                data: new Date(2017, 5),
            },
            {
                id: uuidv4(),
                title: 'Carrefour Web Developer',
                description:
                    'Bootcamp intensivo focado em desenvolver habilidades práticas de desenvolvimento web, com ênfase em ferramentas e tecnologias de ponta para a criação de soluções web completas.',
                institution: 'Carrefour Web Developer',
                data: new Date(2022, 7),
            },
            {
                id: uuidv4(),
                title: 'Desenvolvedor Full Stack',
                description:
                    'Formação intensiva com mais de 400 horas em desenvolvimento web, abordando front-end com HTML5, CSS3, React.js, back-end com Node.js, Express, APIs RESTful, além de SQL (MySQL) e NoSQL (MongoDB). Inclui também metodologias ágeis e boas práticas de engenharia de software.',
                institution: 'Resilia Educação',
                data: new Date(2023, 4),
            },
            {
                id: uuidv4(),
                title: 'JavaScript',
                description:
                    'Certificação em JavaScript, com foco nos fundamentos e práticas essenciais para desenvolvimento de aplicações eficientes utilizando essa linguagem.',
                institution: 'DevMedia',
                data: new Date(2023, 5),
            },
            {
                id: uuidv4(),
                title: 'REST',
                description:
                    'Certificação com foco em APIs REST, abordando práticas de desenvolvimento de APIs escaláveis e seguras utilizando conceitos RESTful.',
                institution: 'DevMedia',
                data: new Date(2023, 6),
            },
            {
                id: uuidv4(),
                title: 'SQL',
                description:
                    'Certificação em SQL, abrangendo fundamentos de banco de dados relacionais e práticas de consulta e manipulação de dados.',
                institution: 'DevMedia',
                data: new Date(2023, 9),
            },
            {
                id: uuidv4(),
                title: 'Testes Unitários Com JUnit',
                description:
                    'Certificação em testes unitários utilizando JUnit, com foco em garantir a qualidade do código por meio de testes automatizados.',
                institution: 'DIODIO',
                data: new Date(2023, 10),
            },
            {
                id: uuidv4(),
                title: 'Banco de Dados',
                description:
                    'Certificação aprofundada em bancos de dados, abordando desde conceitos básicos até a administração e otimização de sistemas de banco de dados.',
                institution: 'DevMedia',
                data: new Date(2023, 12),
            },
        ],
    },
];
