///<reference types="cypress"/>

describe('Automação VR',() => {
  it('Acessar o Mapa no site www.vr.com.br',() =>{
       //Acessar o site// 
      cy.visit('https://www.vr.com.br') 
       //Clicar no botão hamburger//
      cy.get('.vr-menu-trigger--open > .vr-menu-trigger__icon').click()
      //clicar em Pra Você//
      cy.get(':nth-child(3) > .vr-main-navigation__link').click()
       //clicar em Onde usar meu cartão VR?//
      cy.get('.vr-hero__actions > .vr-button--negative').click()
      //Aceitar o Termo de Privacidade para que o popup amarelo não fique na frente dos elementos do mapa    
      cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
      //Confirmar que o campo "endereço ou lugar" está visivel
      cy.get('#endereco').should('be.visible')
             
   })
})




