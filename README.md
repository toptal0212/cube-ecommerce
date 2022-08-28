# 🕋 Cube
Ecommerce web application that authorizes users with [JWT's](https://jwt.io/) through certain API routes.
<br/>
<br/>
Visit the project here &rarr; [Cube](https://cube-ecommerce.vercel.app/)
<br/>
### Notice
- To test the stripe checkout feature, enter these values for these specific parameters
  - Card number - `4242 4242 4242 4224`
  - MM/YY - `04/24`
  - CVC - `424` 
  - All other parameters have `anything` as their value to have a valid checkout 


## 🥞 Tech stack
| Frontend | Backend | Database |
| :---:    | :---:   | :---:    | 
| [React](https://reactjs.org/) | [Express](https://expressjs.com/)   | [PostgreSQL](https://www.postgresql.org)|
|  [Tailwind](https://tailwindcss.com/)|[Stripe](https://stripe.com/)|          |         |

## 🚀 Features

- Allow users to `register` storing passwords as hashes using the [bcrypt](https://www.npmjs.com/package/bcrypt) library and verifying credentials before adding to database 
- Verify users to `login` by comparing hashes using [bcrypt](https://www.npmjs.com/package/bcrypt)
  - Then create [JWT's](https://jwt.io/) used to `protect` certain API routes for their session
- `Simple search bar` that searches products looking for characters that are included in the product name
- Users can `add items` to their cart in which the icon will update dynamically to render how many items are currently in their cart
- Allow users to `update the quantity of a specific item` through the users cart
- Users can `delete items` from their cart in which the cart icon will also update dynamically
- `Checkout` with stripe
- Allow users to `view` their `orders` after checkout

## 💻 How the API works 
