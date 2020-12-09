 const jq = $.noConflict();
let today = new Date();
let firstDate;
let endDate;
let result =''
function countDate(firstDate, endDate) {
    let oneDay = 1000 * 60 * 60 * 24;
    let count = Math.floor((endDate - firstDate) / oneDay);
    return count;
  };
jq(document).ready(function(){
jq("#first-today").on("change", function() {
     if (jq(this).is(':checked') == true) {
         jq("#first-date").prop("disabled", true);
     }
     else {
         jq("#first-date").prop("disabled", false)}
    })
jq("#second-today").on("change", function() {
        if (jq(this).is(':checked') == true) {
            jq("#end-date").prop("disabled", true);
        }
        else {
            jq("#end-date").prop("disabled", false)}
       })
jq("#confirm").on('click', function(event) {
    event.preventDefault();
    if (jq('#first-today').is(':checked') == true && jq('#second-today').is(':checked') == false) {
        firstDate = today;
        endDate = new Date(jq("#end-date").val())
        jq('#test').text(`${countDate(firstDate, endDate)} ngày!`)
    }
    else if (jq('#second-today').is(':checked') == true && jq('#first-today').is(':checked') == false) {
        firstDate = new Date(jq("#first-date").val());
        endDate = today;
        jq('#test').text(`${countDate(firstDate, endDate)} ngày!`)
    }
    else if (jq('#second-today').is(':checked') == false && jq('#first-today').is(':checked') == false) {
        firstDate = new Date(jq("#first-date").val());
        endDate = new Date(jq("#end-date").val());
        if(firstDate  != "Invalid Date") {
            if(endDate != "Invalid Date") {
            jq('#test').text(`${countDate(firstDate, endDate)} ngày!`)
            // console.log(typeof firstDate,typeof endDate)
            }
        }
        else {
            jq('#test').text(`Vui lòng nhập ngày!`).css('font-size', '28px')
        }
    }
    else {

        jq('#test').text(`Vui lòng nhập ngày!`).css('font-size', '28px')

    }
})
})
