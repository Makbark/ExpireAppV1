# 📱 Expire

## 📖 Overview
Expire is a simple yet effective tool designed to help you track your food expiration dates and reduce waste. Just input your food items and their expiration dates, and Expire will notify you before they go bad—helping you save money and make the most of your groceries. This app is a personal project to gain experience in web and mobile development with React, so you may encounter occasional bugs. If you do, please reach out so I can work on improvements and provide a better experience. Thank you for trying out Expire, and I hope it helps make food management a little easier!

## 🚀 Features
- 🥦 Nutrition Tracking
- 🗓️ Expiration Reminders
- 🔎 Auto Nutrition Search

## 📷 Screenshots (Optional)

![Simulator Screenshot - iPhone 16 Pro Max - 2025-02-19 at 10 42 38](https://github.com/user-attachments/assets/4f288487-e1f1-4a33-a1e9-22eefea26f05)
![Simulator Screenshot - iPhone 16 Pro Max - 2025-02-19 at 10 42 41](https://github.com/user-attachments/assets/3e165e0b-ddfe-4d95-ade8-234ccd84f8f6)
![Simulator Screenshot - iPhone 16 Pro Max - 2025-02-19 at 10 44 51](https://github.com/user-attachments/assets/ec2862fc-34f5-4cf4-ba16-4be304c64b97)

![Simulator Screenshot - iPhone 16 Pro Max - 2025-02-19 at 10 47 11](https://github.com/user-attachments/assets/168ef8be-5d28-4059-97ac-b3c65d5402a9)
![Simulator Screenshot - iPhone 16 Pro Max - 2025-02-19 at 10 47 47](https://github.com/user-attachments/assets/c9fdd341-6f16-4e16-b3a7-41a474909722)
![Simulator Screenshot - iPhone 16 Pro Max - 2025-02-19 at 10 47 39](https://github.com/user-attachments/assets/d55dcbbc-f5fd-4947-b856-5dee56518bd9)


## 🛠️ Technologies Used
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- [Expo Tab Navigation](https://docs.expo.dev/router/advanced/tabs/)

## ⚡ Installation & Setup
Clone the repository and install dependencies:
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

Start the development server:
```sh
npx expo start
```


## 🔗 API & Configuration
### 📡 FoodData Central API
This project utilizes the [FoodData Central API](https://fdc.nal.usda.gov/api-key-signup.html) to fetch nutritional information for food items.

### 🔑 API Key Setup
To use the API, you need to obtain an API key:
1. Sign up for an account at [FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html).
2. Generate an API key.
3. Store the key in an environment variable.

### 🛠️ Configuration
Create a `.env` file in the root of your project and add:
```env
FOOD_DATA_API_KEY=your_api_key_here
```
Then, load it in your code:
```javascript
import 'dotenv/config';

const API_KEY = process.env.FOOD_DATA_API_KEY;
const BASE_URL = "https://api.nal.usda.gov/fdc/v1/foods/search";

// Example Fetch Request
async function fetchFoodData(query) {
  const response = await fetch(`${BASE_URL}?query=${query}&api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}
```

### 📌 Usage Example
Call the function with a food name to get its nutritional details:
```javascript
fetchFoodData("apple").then(data => console.log(data));
```

### ⚠️ Note
- Keep your API key **private** and **never** commit it to GitHub. Use `.gitignore` to exclude your `.env` file.
- Review the [FoodData Central API Documentation](https://fdc.nal.usda.gov/api-documentation.html) for more details.


## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact
For questions or suggestions, reach out at **markn2025@gmail.com** or connect on [LinkedIn](www.linkedin.com/in/markn0525).
