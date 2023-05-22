describe('map', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8888');
  });

  it('shall open popup on marker click', () => {
    cy.get(`[data-test-id="Marker Professor Aschehougs plass"]`).click();
    const popup = cy.get('[aria-label="Stasjonsinformasjon"]');
    popup.should('be.visible');
    popup.get('[aria-label="Sykler"]').contains('Ledige sykler: 2');
    popup.get('[aria-label="Låser"]').contains('Ledige låser: 10');
  });

  it('shall close popup', () => {
    cy.get(`[data-test-id="Marker Professor Aschehougs plass"]`).click();
    cy.get('.leaflet-popup-close-button').click();
    cy.wait(200);
    cy.get('[aria-label="Stasjonsinformasjon"]').should('not.exist');
  });
});
