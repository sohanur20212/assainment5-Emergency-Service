1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById দিয়ে আমরা  ইউনিক একটি id ধরতে পারি  কারণ id page-এ unique হতে হয়, তাই এটি সর্বদা একটি element রিটার্ন করে।

getElementsByClassName দিয়ে আমরা, একটি বা একাধিক HTML element-এর class পেয়ে থাকি, এটি live collection এবং  page-এ নতুন element add হলে collection আপডেট হয়।

querySelector দিয়ে আমরা CSS selector ব্যবহার করে প্রথম matching element পেতে।

querySelectorAll দিয়ে আমরা CSS selector ব্যবহার করে সব matching elements পেতে। কিন্তু live নয় এটি NodeList.

2. How do you create and insert a new element into the DOM?

Ans: DOM এ নতুন element তৈরি করে insert করার জন্য appendChild() ব্যবহার করতে পারি যা parent element-এর সবশেষে যোগ করে, prepend() parent element-এর শুরুতে যোগ করে, insertBefore() নির্দিষ্ট element-এর আগে insert করে 

3. What is Event Bubbling and how does it work?

Ans: Event Bubbling মানে হলো, যখন কোনো element-এ event ঘটে (যেমন click), তখন সেই event প্রথমে সেই element-এ trigger হয়, তারপর তার parent element-এ যায়, এরপর তার parent এর parent-এ যায়, এভাবে সবচেয়ে outer (document পর্যন্ত) পৌঁছায়। এটা ঠিক যেন পানির বুদবুদ (bubble) নিচ থেকে ওপরে ওঠে।

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation হলো, event handling এর একটি টেকনিক, যা Event Bubbling এর ওপর ভিত্তি করে কাজ করে।অনেকগুলো child element-এ আলাদা আলাদা event listener না বসিয়ে, parent element-এ একটা মাত্র event listener বসানো, আর event bubbling ব্যবহার করে parent থেকে child কে চেনা। code এ Performance ভালো হয়, Dynamic element handle করা সহজ হয়, Less memory ব্যবহার হয়।

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() কোনো element এর default action বন্ধ করার জন্য ব্যবহার করা হয়। stopPropagation() Event Bubbling বন্ধ করার জন্য ব্যবহার করা হয়। মানে event আর parent এ propagate হবে না।