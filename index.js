function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// delegation

getElement("cards").addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    // hert icon  count
    const heartCount = getElement("heart-count").innerText;
    const currentCount = Number(heartCount) + 1;
    getElement("heart-count").innerText = currentCount;
  }

  // down the coin count
  if (e.target.className.includes("call_btn")) {
    const coinDown = getElement("coin-down").innerText;
    const currentDownCount = Number(coinDown) - 20;

    if (currentDownCount < 0) {
      alert("❌ আপনার পর্যন্ত কয়েন নেই , কমপক্ষে কল করতে ২০ কয়েন লাগবে।");
      return;
    }
    getElement("coin-down").innerText = currentDownCount;
  }

  //    copy count
  if (e.target.className.includes("copy-btn")) {
    const copyCount = getElement("copyCountBtn").innerText;
    const currentCopyCount = Number(copyCount) + 1;
    getElement("copyCountBtn").innerText = currentCopyCount;

    // copy hotnumber 
     const copyButton = e.target;
  const hotNum = copyButton.parentNode.parentNode.childNodes[7].innerText;

  

  navigator.clipboard.writeText(hotNum).then(() => {
    alert(`Copy হয়েছে: ${hotNum}`);
  })
    
  }

  // add div in history
  if (e.target.className.includes("call_btn")) {
    const callButton = e.target;
    const title = callButton.parentNode.parentNode.childNodes[3].innerText;

    const hotNum = callButton.parentNode.parentNode.childNodes[7].innerText;
    alert("📞" + title + " " + hotNum);
    const historyContainer = getElement("clearHistoryContainer");

    const newCard = document.createElement("div");
    const now = new Date();
    const time = now.toLocaleTimeString();
    newCard.innerHTML = `
    <div class="  bg-[#fafafa] p-3 gap-2 mt-5 rounded-xl ">
                <div class="flex justify-between items-center">
                    <div class="">
                <h1 class="font-bold">${title}</h1>
                <span class="text-[#777777]">${hotNum}</span>
                </div>
                <div class="font-semibold">${time}</div>
            </div>
                
           </div>

`;
    historyContainer.append(newCard);
  }
});

getElement("clearHistoryBtn").addEventListener("click", function () {
  getElement("clearHistoryContainer").innerHTML = "";
});
