import { mount, RouterLinkStub } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('It\' a Logo Component ', () => {
    const logo = mount(Logo, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(logo.vm).toBeTruthy()
  })
})