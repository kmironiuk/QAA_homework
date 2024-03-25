describe("Praca domowa Modul 2", () => {
      it("Wpisz email user888 i haslo 1234567890", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('#user_password').type("1234567890");
        cy.get('.eckniwg2').click();
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible");
        cy.get(':nth-child(12) > .next-bve2vl').click();
      });

      it("Wpisz email testowyqa i haslo QA!automation-1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get('#user_email').type("testowyqa@qa.team");
        cy.get('#user_password').type("QA!automation-1");
        cy.get('.eckniwg2').click();
        cy.get('#open-navigation-menu-mobile > svg > path').click();
        cy.get(':nth-child(9) > .next-bve2vl').click();
      });
     });