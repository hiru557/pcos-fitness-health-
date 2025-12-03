// ================= Progress Tracker =================

function saveProgress() {
  const weight = document.getElementById("weight").value;
  const steps = document.getElementById("steps").value;
  const water = document.getElementById("water").value;

  if(weight === "" || steps === "" || water === "") {
    alert("Please fill all fields");
    return;
  }

  const progressData = {
    weight: weight,
    steps: steps,
    water: water,
    date: new Date().toLocaleDateString()
  };

  let records = JSON.parse(localStorage.getItem("pcosProgress")) || [];
  records.push(progressData);
  localStorage.setItem("pcosProgress", JSON.stringify(records));
  alert("Progress saved!");
}


// ================= Diet & Workout Plan =================

function generatePlan() {
  const goal = document.getElementById("goal").value;

  let diet = "";
  let workout = "";

  if(goal === "weightloss") {
    diet = "• Breakfast: Masala Oats + Green Tea\n• Lunch: Multigrain Roti + Sabji + Salad\n• Dinner: Veg Soup + Paneer";
    workout = "• 20 min walking\n• 15 min HIIT\n• 20 min Yoga (Surya Namaskar)";
  }
  else if(goal === "muscle") {
    diet = "• Breakfast: Moong Chilla + Paneer\n• Lunch: Roti + Dal + Rice + Curd\n• Dinner: Soya/Paneer + Veg + Milk";
    workout = "• 30 min weight training\n• 10 min cardio\n• 15 min stretching";
  }
  else {
    diet = "• Breakfast: Poha / Dosa / Idli\n• Lunch: Roti + Sabji + Dal\n• Dinner: Khichdi + Salad";
    workout = "• 30 min normal walking\n• 20 min light strength workout";
  }

  document.getElementById("diet-output").innerText = diet;
  document.getElementById("workout-output").innerText = workout;
}


// ================= AI Chat Bot (simple) =================

function sendMessage() {
  const userMsg = document.getElementById("chat-input").value;
  if(userMsg.trim() === "") return;

  let reply = "I'm here to help! Ask about diet, workout or PCOS.";

  if(userMsg.toLowerCase().includes("diet")) {
    reply = "You should take high protein breakfast, low sugar, more fiber & water. Want a full diet plan?";
  }
  if(userMsg.toLowerCase().includes("pcos")) {
    reply = "PCOS can be managed with diet, workout & stress control. Don't worry, you're doing great!";
  }
  if(userMsg.toLowerCase().includes("workout")) {
    reply = "Strength training + 30 min walk daily is best for PCOS.";
  }

  const botBox = document.getElementById("chat-box");
  botBox.innerHTML += `<p><b>You:</b> ${userMsg}</p>`;
  botBox.innerHTML += `<p><b>AI:</b> ${reply}</p><hr>`;
  document.getElementById("chat-input").value = "";
}
