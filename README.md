# automation-testing-practice

## How to run tests:

Clone the repository
>git clone https://github.com/nnad/automation-testing-practice.git

Install the node_modules
>npm install

Run tests
>npm run test

## Part 2
I implemented the UI test for https://www.lego.com/ using Cypress framework.

Steps: 
1) Open shop page
2) Open shop menu
3) Click the 'Age' button
4) Click the "6+" button
5) Click on the 'Keychains' checkbox
6) Click on the 'Price' checkbox
7) Add the Mandalorian keychain to cart
8) Go to cart

Expected result: cart contains 1 item. The item name is 'The Mandalorian™ Key Light' which costs 13.99
