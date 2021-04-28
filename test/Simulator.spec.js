import Vuex from 'vuex'
import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'

import TranslateStore from '@/store/translate.js'
import Simulator from '@/components/Simulator.vue'

// const store = new Vuex.Store(TranslateStore)

describe('Simulator', () => {
  let wrapper
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store
  beforeEach(async () => {
    store = await new Vuex.Store({
      state: {
        translate: {
          simulator: {
            lang: 'pt-BR',
            currency: 'BRL',
            title: '',
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
          }
        }
      }
    })
  })

  test('is a Vue instance', async () => {
    const simulator = shallowMount(Simulator, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      store,
      localVue
    })
    expect(simulator.vm.isVueInstance()).toBeTruthy();
  });

  
  // beforeAll(() => {
  //   wrapper = shallowMount(Simulator, {
  //     localVue, 
  //     store
  //   })
  // })
  // test('is a Vue instance', async () => {
  //   await true;
  //   expect(wrapper.isVueInstance()).toBeTruthy();
  // });


  // const wrapper = shallowMount(Simulator, {
  //   localVue
  // })
  // test('is a Vue instance', async () => {
  //   expect(wrapper.isVueInstance()).toBeTruthy();
  // })

})