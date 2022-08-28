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

## 📸 Preview
![Screenshot (30)](https://user-images.githubusercontent.com/72290056/187064426-17063c88-542a-44d0-b11f-c477b961ed98.png)

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
#### A `Protected` route means a [JWT](https://jwt.io/) is used in a middleware to authorize the users actions 
| Methods | Routes       | Protected | Action |
| :---:   | :---:        | :---:     |:---:          |
| `POST`  | /api/register  |  No       |  Create new user  |
|`POST`| /api/login | No | Verify the user to login and create a JWT to authorize certain actions |
|`GET`| /api/products | No | Get all products from database |
| `GET`| /api/authorize | Yes | Used to verify JWT's |
|`POST`| /api/carts | Yes | Add item to cart |
|`GET`| /api/carts | Yes | Get all items that the user added to their cart |
|`DELETE`| /api/carts | Yes | Delete item from cart |
|`PUT`| /api/carts | Yes | Update the quantity of a specific item |
| `POST` | /api/checkout | Yes| Create a stripe checkout session |
| `POST` | /api/checkout/webhook | No| Verifies if payment succeeded and updates the orders table in the database |
|`GET`| /api/orders | Yes | Get all of the users orders |
|`POST`| /api/orders/products | No  | Get specifics on what exactly the user ordered |

## 🖼️ Images

![Screenshot (31)](https://user-images.githubusercontent.com/72290056/187064275-ab69cfea-d317-49be-9781-bfc952e2350c.png)
![Screenshot (32)](https://user-images.githubusercontent.com/72290056/187064279-30d02c54-db87-435a-aee4-f8f3d8447900.png)
![Screenshot (33)](https://user-images.githubusercontent.com/72290056/187064281-a4c93f7d-24c3-455c-bd86-df7cf8792e16.png)
![Screenshot (34)](https://user-images.githubusercontent.com/72290056/187064284-f54bf13b-4a7f-48cb-985a-6309f93c0721.png)
![Screenshot (35)](https://user-images.githubusercontent.com/72290056/187064286-9d0e1725-7416-4f73-bfc0-cfbb141a45a8.png)
![Screenshot (36)](https://user-images.githubusercontent.com/72290056/187064289-8963b264-2682-42b2-91c2-17dd7aa9f0a7.png)
