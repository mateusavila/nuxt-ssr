import { mount } from '@cypress/vue'
import Simulator from '../../components/Simulator.vue'
describe('Crédito MMR', () => {
  mount(Simulator)
  it('Se o primeiro campo vai para 40', () => {
    cy.visit('/credito-digital-mmr')

    cy.get('.simulator-input-0')
      .invoke('val', 40)
      .trigger('change')

  })
  it('Se o segundo campo vai para 16', () => {
    cy.visit('/credito-digital-mmr')

    cy.get('.simulator-input-1')
      .invoke('val', 16)
      .trigger('change')

  })

  it('Se o terceiro campo vai para 50', () => {
    cy.visit('/credito-digital-mmr')

    cy.get('.simulator-input-2')
      .invoke('val', 50)
      .trigger('change')

  })
  

    
})
