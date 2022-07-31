describe('Cross Domain Test Suit',function(){
    it('Cross Domain',function(){
        cy.visit('http://techedclasses.in/');
        cy.get('.dropdwn-course').click();      //clicking on Notes
        cy.get('.dropdown-menu').click();      //clicking on Class X
        cy.get('p a').first().invoke('removeAttr','target').click();   // Click on the link and try to move to the new URL
        
        //Cross Domain Origin Logic Starts from here.
        cy.origin('https://www.youtube.com/',()=>{
            cy.get('#title yt-formatted-string a[href="/watch?v=CEfGLywlVP4&list=PLVflCw5CE3hUCw9kGZqjal8sTCfoXan_3"]').click();
        });
    });
});







