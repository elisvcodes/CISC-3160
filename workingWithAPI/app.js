const activity = document.getElementById('activity');
const type = document.getElementById('type');
const participants = document.getElementById('participants');

 const bored = fetch('https://www.boredapi.com/api/activity');


bored.then(response => response.json()).then(data => {
  activity.innerHTML = data.activity;
  type.innerHTML = data.type;
  participants.innerHTML = data.participants;
})
