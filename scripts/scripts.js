const callHistoryData = [];
const callHistoryContainer = document.getElementById("call-history-container");

//  Handle call buttons for 1–9
for (let i = 1; i <= 9; i++) {
  document.getElementById(`call-${i}`).addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById(`name-${i}`).innerText;
    const number = document.getElementById(`number-${i}`).innerText;
    const coins = parseInt(document.getElementById("coins").innerText);

    if (coins < 20) {
      alert("❌You don't have enough coins to make this call");
    } else {
      const totalAvailableCoins = coins - 20;
      document.getElementById("coins").innerText = totalAvailableCoins;
      alert(`📞 Calling ${name} : ${number}...`);

      const data = {
        Name: name,
        Number: number,
        Date: new Date().toLocaleTimeString(),
      };
      callHistoryData.push(data);

      const div = document.createElement("div");
      div.innerHTML = `
        <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
          <div>
            <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
            <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
          </div>
          <p class="text-[18px] font-normal">${data.Date}</p>
        </div>
      `;
      callHistoryContainer.appendChild(div);
    }
  });
}

//  Heart Section
const hearts = document.getElementsByClassName("heart");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    const heartCount = parseInt(document.getElementById("heart-count").innerText);
    document.getElementById("heart-count").innerText = heartCount + 1;
  });
}

//  Handle copy buttons for 1–9
for (let i = 1; i <= 9; i++) {
  document.getElementById(`copy-${i}`).addEventListener("click", function () {
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    document.getElementById("copy-count").innerText = copyCount + 1;

    const number = document.getElementById(`number-${i}`).innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!");
  });
}

//  Clear call history
document.getElementById("clear-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("call-history-container").innerHTML = "";
  alert("History Cleared ✅");
});
