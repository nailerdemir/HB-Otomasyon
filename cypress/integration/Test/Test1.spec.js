/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
context('Test', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com/', )
      cy.get('.gLFyf').click().type('hepsiburada{enter}')
      cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').click()
      cy.url().should('eq','https://www.hepsiburada.com/').log('Ana Sayfa URL Başarılı')
    })

    it('Login', () => {
      cy.get('#login').click({force:true})
      cy.url().should('contains','https://giris.hepsiburada.com/').log('Login URL Başarılı')
      cy.get('#txtUserName').should('have.attr','placeholder','E-posta adresi veya telefon numarası').type('hbtest0101@gmail.com')
      cy.get('#btnLogin').click()
      /*cy.get('#txtPassword').should('have.attr','placeholder','Şifre').type('Aa123123')
      cy.get('#btnEmailSelect').click()
      //Üye girişi yapmama hepsiburada izin vermiyor. Bağlantınız güvenli değil hatası alıyorum.*/
    })
      it('Product Add/Control', () => {
        cy.get('.desktopOldAutosuggestTheme-input').click().type('iphone11')
        cy.get('.SearchBoxOld-buttonContainer').click()
        cy.url().should('contains','iphone11').log('Arama URL Başarılı')
        cy.get('[class$=productListContent-grid-0] li:first').trigger('mouseover')
        cy.get('div').contains('Sepete ekle').click({force:true})
        cy.get('[class$=addToCardButtonWrapper]').contains('Sepete ekle').click({force:true})
        /*cy.get('#shoppingCart').should('be.visible').click()
        cy.url().should('contains','/sepetim').log('Sepetim URL Başarılı')
        cy.get('[class$=header_basketitems_389fm]').contains('iPhone 11 128 GB').log('Ürün Adı Doğru')
        cy.get('[class$=header_basketitems_389fm]').contains('12.299,00 TL').log('Ürün Fiyatı Doğru')
        //Ürün sepete eklenirken bot olarak algıladığı için "ürün sepete eklenemedi" hatası alıyorum.
        */
        })
 })