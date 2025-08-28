function getElement(id){
   const element = document.getElementById(id);
    return element
}

// delegation 




getElement('cards').addEventListener('click',function(e){
   if(e.target.className.includes('fa-heart')){
    // hert icon  count
    const heartCount = getElement('heart-count').innerText
    const currentCount = Number(heartCount) + 1
    getElement('heart-count').innerText = currentCount
    
   }

    // down the coin count 
   if(e.target.className.includes('call_btn')){
    const coinDown = getElement('coin-down').innerText
    const currentDownCount = Number(coinDown) - 20;
    getElement('coin-down').innerText = currentDownCount;
   }



//    copy count 
   if(e.target.className.includes('copy-btn')){
    const copyCount = getElement('copyCountBtn').innerText
    const currentCopyCount = Number(copyCount) + 1;
     getElement('copyCountBtn').innerText = currentCopyCount;
    console.log(currentCopyCount);
    
   }
   


    // add div in history 
    if(e.target.className.includes('call_btn')){
        alert(title)
        const historyContainer = getElement('historyContainer')

const newCard = document.createElement('div')

newCard.innerHTML = `
    <div class="  bg-[#fafafa] p-3 gap-2 mt-5 rounded-xl ">
                <div class="flex justify-between items-center">
                    <div class="">
                <h1 class="font-bold">${title}</h1>
                <span class="text-[#777777]">999</span>
                </div>
                <div class="font-semibold">11:36:58 AM</div>
            </div>
                
           </div>

`
historyContainer.append(newCard)

        
    }
})




// traverse technique 

const callBtn = document.getElementsByClassName('call_btn')
for(const callButton of callBtn){
    callButton.addEventListener('click', function(){
        // const title = callButton.closest('.card')
        const title = callButton.parentNode.parentNode.childNodes[3].innerText

        const hotNum = callButton.parentNode.parentNode.childNodes[7].innerText
       console.log(title,hotNum);
    })
    
    
}

