// # 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];


// ## 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：
const coursePriceBase = 1500;
const coursePrice11 = 1300;
const coursePrice21 = 1100;
const getCoursePrice = courses => {
  if (courses > 20) return coursePrice21;
  if (courses > 10) return coursePrice11;
  return coursePriceBase;
}

let purchaseRecords = [];
function addPurchaseRecord(name, courses) {
  if (!members.includes(name) || typeof courses !== 'number' || courses <= 0) {
    console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
    return;
  }

  const coursePrice = getCoursePrice(courses);
  const total = coursePrice * courses;
  const record = { name, courses, coursePrice, total };

  purchaseRecords.push(record);
  console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${record.total} 元。`);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");


// ## 第二階段：計算目前的總營業額
// 新增函式 calculateTotalPrice，計算目前的總營業額為多少。
// 印出 console.log 文字為 目前總營業額為 ${totalPrice} 元
function calculateTotalPrice() {
  let totalPrice = 0;
  purchaseRecords.forEach(record => totalPrice += record.total);
  console.log(`目前總營業額為 ${totalPrice} 元`);
}
calculateTotalPrice();


// ## 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出
// 印出 console.log 文字為 未購買課程的會員有：.......
function filterNoPurchaseMember() {
  let noPurchaseMember = [];
  members.forEach(member => {
    let isPurchased = false;
    for (const record of purchaseRecords) {
      if (record.name === member) {
        isPurchased = true;
        break;
      }
    }
    if (!isPurchased) noPurchaseMember.push(member);
  })
  noPurchaseMember = noPurchaseMember.join(',');
  console.log(`未購買課程的會員有：${noPurchaseMember}`);
}
filterNoPurchaseMember();