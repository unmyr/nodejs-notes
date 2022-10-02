describe('document root', () => {
  it('should display header text', () => {
    cy.visit('/hello-world/')
    cy.contains('h1', 'Hello Vue 3 + TypeScript + Vite')
  })
})
