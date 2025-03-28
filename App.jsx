import React from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const meals = [
  "Meal 1: 4 eggs, 2 slices Ezekiel bread, 1 banana, 1 scoop whey",
  "Meal 2: 6 oz chicken, 1 cup rice, 1 tbsp olive oil, 1 cup green beans",
  "Meal 3: 6 oz beef/steak, 1 medium sweet potato, 1 tbsp avocado oil, 1 cup broccoli",
  "Meal 4: 1 scoop whey, 1.5 cups rice, 1 tbsp nut butter, 1 apple"
];

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <h1 style={{ fontSize: 24 }}>Fat Loss Planner</h1>
      <p>Daily Macros: 2910 kcal | 220g Protein | 82g Fat | 322g Carbs</p>
      {days.map((day) => (
        <div key={day} style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 18 }}>{day}</h2>
          {meals.map((meal, i) => (
            <p key={i}>- {meal}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
