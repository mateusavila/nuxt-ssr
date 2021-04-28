export const state = () => ({
  loaded: false,
  translate: {
    howworks: {
      title: ''
    },
    partners: {
      header: ''
    },
    growthbox: {
      lines: '',
      parcel: '',
      ideal: ''
    },
    mediakit: {
      menu: [],
      yes: '',
      no: ''
    },
    simulator: {
      lang: 'pt-BR',
      currency: 'BRL',
      title: '',
      numbers: {
        money: {
          min: 0,
          max: 0,
          step: 0
        },
        parcel: {
          min: 0,
          max: 0,
          step: 0
        },
        revenue: {
          min: 0,
          max: 0,
          step: 0
        }
      },
      form: {
        title: '',
        like: '',
        pay: '',
        revenue: '',
        currency: '',
        months: ''
      },
      result: {
        title: '',
        parcel: '',
        total: '',
        go_to: '',
        simulation_1: '',
        simulation_2: ''
      }
    },
    blog: {
      publish: '',
      updated: '',
      home: {
        by: '',
        more: '',
        title: ''
      },
      arrows: {
        next: '',
        prev: ''
      },
      filter: {
        orders: []
      }
    },
    close: '',
    footer: {
      social: {
        twitter: '',
        instagram: '',
        blogger: '',
        linkedin: '',
        facebook: ''
      },
      columns: [],
      privacy: {
        text: '',
        url: ''
      },
      terms: {
        text: '',
        url: ''
      },
      menu: [],
      email: '',
      a55_menu: [],
      platform_menu: [],
      country_menu: []
    },
    header: {
      menu_text: '',
      login: {
        url: '',
        text: ''
      },
      menu: []
    },
    money: {
      separator: '',
      decimal: '',
      prefix: ''
    },
    newsletter: {
      title: '',
      button: '',
      success: {
        title: '',
        text: ''
      },
      close: '',
      form: {
        name: {
          label: '',
          error: ''
        },
        email: {
          label: '',
          error: ''
        }
      }
    },
    read_more: '',
  }
})
export const getters = {
  loaded: state => state.loaded,
  translate: state => state.translate
}
export const mutations = {
  updateLoaded (state, loaded) { state.loaded = loaded },
  updateTranslate (state, translate) { 
    if (!state.loaded) state.translate = translate
  }
}