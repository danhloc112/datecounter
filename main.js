function countDate(firstDate, lastDate) {
    let oneDay = 1000 * 60 * 60 * 24;
    let count = Math.floor((lastDate - firstDate) / oneDay);
    return count;
  };
let lastDate = new Date();
// lastDate = lastDate.toDateString();
let inputFirstDate = document.getElementById('first-date');
inputFirstDate.onchange = function(e) {
  firstDate = Date.parse(e.target.value)
  document.getElementById('test').innerHTML = `${countDate(firstDate, lastDate)} ngày!`;
}
