export default {
  howworks: {
    title: "Como Funciona"
  },
  partners: {
    header: "Parceiros",
    menu: [
      { name: "Home", slug: "/" },
      { name: "Parceiros", slug: "/integracao-parceiros" },
      { name: "Media Kit", slug: "/media-kit" },
      { name: "API", slug: "https://docs.a55.tech/docs", external: true }
    ],
    steps: "Próximos Passos"
  },
  mediakit: {
    yes: "Sim",
    no: "Não",
    menu: [
      { name: "Introdução", "pointer": "#mediakit-hero", "children": false },
      { name: "Missão, Visão e Valores", "pointer": "#mediakit-mission", "children": false },
      { name: "Clientes", "pointer": "#mediakit-clients", "children": false },
      { name: "Nossa Marca", "pointer": "#mediakit-our-logo", "children": [
        { name: "Logo", "pointer": "#mediakit-our-logo", "children": [
            { name: "área de reserva", "pointer": "#mediakit-our-logo-reserve" },
            { name: "redução", "pointer": "#mediakit-our-logo-reduction" },
            { name: "aplicações", "pointer": "#mediakit-our-logo-aplications" }
          ]
        },
        { name: "Cores", "pointer": "#mediakit-colors", "children": false },
        { name: "Tipografia", "pointer": "#mediakit-typography", "children": false }
        ]
      },
      { name: "Comunicação", "pointer": "#mediakit-communication", "children": false },
      { name: "Downloads", "pointer": "#mediakit-downloads", "children": false }
    ]
  },
  faq: {
    title: "Perguntas frequentes",
    label: "Escreva sua dúvida aqui",
    empty: "Nenhum resultado encontrado"
  },
  growthbox : {
    lines: "Linhas a <br />partir de",
    parcel: "Parcele em até",
    ideal: "Ideal <br />para"
  },
  blog: {
    publish: "Publicado em",
    updated: "Atualizado em",
    home: {
      by: "Por",
      more: "Mais artigos",
      title: "Acompanhe as novidades no nosso blog"
    },
    arrows: {
      prev: "Anterior",
      next: "Próximo"
    },
    filter: {
      category_all: "Tudo",
      order_label: "Ordenar por mais recente",
      orders: [
        {
          name: "Ordenar por mais visitado",
          slug: "views",
          order: "desc"
        },
        {
          name: "Ordenar por mais recente",
          slug: "date",
          order: "desc"
        },
        {
          name: "Ordenar por mais antigas",
          slug: "date",
          order: "asc"
        },
        {
          name: "Ordenar por autores A-Z",
          slug: "author",
          order: "asc"
        },
        {
          name: "Ordenar por autores Z-A",
          slug: "author",
          order: "desc"
        },
        {
          name: "Ordenar por título A-Z",
          slug: "title",
          order: "asc"
        },
        {
          name: "Ordenar por título Z-A",
          slug: "title",
          order: "desc"
        }
      ]
    }
  },
  close: "fechar",
  footer: {
    social: {
      twitter: "https://twitter.com/a55tech",
      linkedin: "https://www.linkedin.com/company/a55/?originalSubdomain=br",
      blogger: "https://legacy.a55.tech/es/blog-a55/",
      facebook: "https://www.facebook.com/a55.tech/",
      instagram: "https://www.instagram.com/a55.tech/"
    },
    legal: [
      { name: "Termos de autorização para consulta ao SCR", slug: "https://wpbr-dev.a55.tech/wp-content/uploads/2021/04/SCR-Termo-de-Autorizacao-de-Consulta-Socinal-corban-copia.pdf", "has_image": false, "width": false, "height": false },
      { name: "Termos de uso e política de privacidade", slug: "https://wpbr-dev.a55.tech/wp-content/uploads/2021/04/Politica_de_protecao_de_dados_a55.pdf", "has_image": false, "width": false, "height": false },
      { name: "Parceiro do Canal MPME do BNDES", slug: "https://www.bndes.gov.br/wps/portal/site/home/financiamento/canal-mpme/canal-mpme-fintechs-de-credito", "has_image": false, "width": false, "height": false },
      { name: "Parceiro do Canal MPME do BNDES", slug: "https://www.bndes.gov.br/wps/portal/site/home/financiamento/canal-mpme/canal-mpme-fintechs-de-credito", "has_image": "logo-bndes.svg", "width": "159", "height": "33" }
    ],
    menus: [
      {
        header: "a55",
        is_link: true,
        external: false,
        url: "/",
        links: [],
        content: ""
      },
      {
        header: "Sobre a gente",
        is_link: true,
        external: false,
        url: "/sobre-a-gente",
        links: [],
        content: ""
      },
      {
        header: "Como funciona",
        is_link: true,
        external: false,
        url: "/como-funciona",
        links: [],
        content: ""
      },
      {
        header: "FAQ",
        is_link: true,
        external: false,
        url: "/faq",
        links: [],
        content: ""
      },
      {
        header: "México",
        is_link: true,
        external: true,
        url: "https://a55.mx/",
        links: [],
        content: ""
      },
      {
        header: "Fale com a gente",
        is_link: false,
        external: false,
        url: "",
        links: [],
        content: "<p><a href=\"mailto:meajuda@a55.tech\">meajuda@a55.tech</a></p><p>Atendimento: Segunda a sexta, <br>das 9h as 18h</p>"
      }
    ],
    columns: ["a55", "Produtos", "Portal", "América Latina", "Fale conosco"],
    privacy: {
      text: "Aviso de Privacidade",
      url: "https://a55-mx-cdn.s3.amazonaws.com/Aviso+Privacidad.pdf"
    },
    terms: {
      text: "Termos e Condições",
      url: "https://a55-mx-cdn.s3.amazonaws.com/T%C3%A9rminos+y+Condiciones.pdf"
    },
    a55_menu: [
      { name: "Blog", slug: "https://legacy.a55.tech/pt/blog/", external: true }
    ],
    menu: [
      { name: "Créditos Empresariais", slug: "/creditos-empresariais" }
    ],
    platform_menu: [
      { name: "Plataforma", slug: "http://plataforma.a55.tech/entrar" }
    ],
    country_menu: [
      { name: "Brasil", slug: "https://a55.tech" },
      { name: "México", slug: "https://a55.mx" }
    ],
    email: "meajuda@a55.tech"
  },
  header: {
    menu_text: "Menu",
    login: {
      url: "https://plataforma.a55.tech/entrar",
      text: "Login"
    },
    menu: [
      { name: "Home", slug: "/" },
      { name: "Sobre a gente", slug: "/sobre-a-gente" },
      { name: "Como funciona", slug: "/como-funciona" },
      { name: "FAQ", slug: "/faq" },
      { name: "Blog", slug: "/blog" }
    ]
  },
  money: {
    separator: ".",
    decimal: ",",
    prefix: "$",
    decimalPlaces: 2
  },
  newsletter: {
    title: "Inscreva-se na nossa newsletter",
    button: "Inscreva-se",
    success: {
      title: "Sucesso!",
      text: "Seu e-mail foi cadastrado corretamente."
    },
    close: "fechar",
    form: {
      name: {
        label: "Nome completo",
        error: "Precisamos de um nome válido",
        placeholder: "Nome completo"
      },
      email: {
        label: "E-mail",
        error: "Precisamos de um e-mail válido",
        placeholder: "E-mail"
      }
    }
  },
  read_more: "Leia mais"
}