export default {
  lang: "pt-BR",
  currency: "BRL",
  title: "Simule aqui seu crédito",
  form: {
    title: "Qual o valor que você precisa para continuar crescendo?",
    like: "Gostaria de:",
    pay: "Para pagar em:",
    revenue: "Nos últimos 3 meses, minha receita mensal média foi:",
    currency: "R$",
    months: "meses"
  },
  numbers: {
    money: {
      min: 20,
      max: 2000,
      step: 5,
      min_text: "20 mil",
      max_text: "2 Milhões"
    },
    parcel: {
      min: 3,
      max: 24,
      step: 1,
      min_text: "3 meses",
      max_text: "24 meses"
    },
    revenue: {
      min: 20,
      max: 2500,
      step: 5,
      min_text: "20 mil",
      max_text: "2.5 Milhões"
    }
  },
  result: {
    title: "Você pagaria",
    parcel: "parcelas de",
    total: "total",
    go_to: "Quero uma proposta",
    url: "https://plataforma.a55.tech/cadastro",
    simulation_1: "CET (juros + taxas) de",
    simulation_2: "* Esta é apenas uma simulação. As taxas de juros podem variar para mais ou menos conforme a análise da documentação enviada."
  },
  values: {
    money: [ 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000 ],
    revenue: [ 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500 ],
    parcel: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  }
}