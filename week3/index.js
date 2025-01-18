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