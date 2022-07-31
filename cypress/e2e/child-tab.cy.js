
describe('Cross Domain Test Suit',function(){
    it('Cross Domain',function(){
        cy.visit('http://techedclasses.in/');
        cy.get('.dropdwn-course').click();      //clicking on Notes
        cy.get('.dropdown-menu').click();      //clicking on Class X
        cy.get('p a').first().invoke('removeAttr','target').click();   // Click on the link and try to move to the new URL
        
    });
});







