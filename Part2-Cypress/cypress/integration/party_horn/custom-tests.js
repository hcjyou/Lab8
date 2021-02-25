describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75'); 
    cy.get('#volume-slider').then(function what($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input'); 
    cy.get('#volume-number').then(function what($el) {
      expect($el).to.have.value(33);
    });
  });

  it('audio element volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input'); 
    cy.get('#horn-sound').then(function what($el) {
      expect($el).to.have.prop('volume', .33);
    });
  });

  it('Sound sources change when party horn radio button selected', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#horn-sound').then(function what($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    });
  });

  it('Image sources change when party horn radio button selected', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#sound-image').then(function what($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
    });
  });

  it('Volume image changes when increasing volumes: level 3', () => {
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(function what($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image changes when increasing volumes: level 2', () => {
    cy.get('#volume-slider').invoke('val', 50).trigger('input');
    cy.get('#volume-image').then(function what($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when increasing volumes: level 1', () => {
    cy.get('#volume-slider').invoke('val', 20).trigger('input');
    cy.get('#volume-image').then(function what($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when increasing volumes: level 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(function what($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
    });
  });
  
  it('honk button is disabled when textbox input is empty', () => {
    cy.get('#volume-number').clear().invoke('val', ''); 
    cy.get('#honk-btn').then(function what($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it('honk button is disabled when textbox input is a non-number', () => {
    cy.get('#volume-number').clear().type('string'); 
    cy.get('#honk-btn').then(function what($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error is shown when number outside of given range is typed', () => {
    cy.get('#volume-number').clear().type('9999'); 
    cy.get('input:invalid').then(function what($el) {
      expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.');
    });
  });


});
