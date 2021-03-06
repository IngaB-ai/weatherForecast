import { defineConfig } from 'cypress'
import { devServer } from 'cypress-angular-dev-server';


export default defineConfig({
  component: {
    devServer,
    specPattern: 'src/**/*.cy.ts'
},
  e2e: {
    'baseUrl': 'http://localhost:4200',
  },
})
