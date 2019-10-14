function onClickAddRecord(){
    let bodyObj = document.getElementById("tbody");
    if(bodyObj === null){
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    


    let license_number = document.getElementById("license_number").value;
    let entrace_number = document.getElementById("entrance_number").value;
    let date_year = document.getElementById("year").value;
    let date_month = document.getElementById("month").value;
    let date_day = document.getElementById("day").value;
    let arrival_hour = document.getElementById("arrival_hour").value;
    let arrival_min = document.getElementById("arrival_min").value;
    let staff_name = document.getElementById("staff_name").value;
    let staff_number = document.getElementById("staff_number").value;
    let status0 = document.getElementById("optionsRadios0").value;
    let status1 = document.getElementById("optionsRadios1").value;
    let status = document.getElementById("optionsRadios1").checked;
    let departure_hour = document.getElementById("departure_hour").value;
    let departure_min = document.getElementById("departure_min").value;
    
    //check collipse
    
    for (let i = 1; i < rowCount; i++){
        if((bodyObj.rows[i].cells[0].innerHTML == "粤B" + license_number)&&
           (bodyObj.rows[i].cells[2].innerHTML == date_year + "/" + date_month + "/" + date_day)&&
            (bodyObj.rows[i].cells[3].innerHTML == (Array(2).join(0)+arrival_hour).slice(-2) + ":" + (Array(2).join(0)+arrival_min).slice(-2))){
            alert("dupulate record");
            return;
        }
    }



    let licenseNoRegex1 = new RegExp(/^[0-9A-Z]{5}$/);
    let licenseNoRegex2 = new RegExp(/^[D,F]{1}[0-9A-Z]{5}$/);
    let staffNoRegex = new RegExp(/^[3,5]{1}[0-9]{7}$/);
    if(!licenseNoRegex1.test(license_number) && !licenseNoRegex2.test(license_number)){
        alert("license number wrong: please input as XXXXX or D/F + XXXXX");
        return;
    }
    if(!(entrace_number >= 1 && entrace_number <= 7)){
        alert("entrance number wrong: please input number 0~7");
        return;
    }
    if(date_year === "--" || date_month === "--" || date_day === "--"){
        alert("please choose the date");
        return;
    }
    if(arrival_hour === "--" || arrival_min === "--"){
        alert("please choose the arrival time");
        return;
    }
    if(staff_name === "--"){
        alert("please enter the staff name");
        return;
    }
    if(!staffNoRegex.test(staff_number)){
        alert("staff number wrong: please enter eight digits number start with 3 or 5");
        return;
    }
    if(status){
        if(departure_hour === "--" || departure_min === "--"){
            alert("please choose the departure time");
            return;
        }
    }

    //time to create a new line
    
    bodyObj.style.display = "";
    
    let cellCount = bodyObj.rows[0].cells.length;
    let newRow = bodyObj.insertRow(rowCount++);
    newRow.insertCell(0).innerHTML = "粤B" + license_number;
    newRow.insertCell(1).innerHTML = entrace_number;
    newRow.insertCell(2).innerHTML = date_year + "/" + date_month + "/" + date_day;
    newRow.insertCell(3).innerHTML = (Array(2).join(0)+arrival_hour).slice(-2) + ":" + (Array(2).join(0)+arrival_min).slice(-2);
    if(status){
        newRow.insertCell(4).innerHTML = (Array(2).join(0)+departure_hour).slice(-2) + ":" + (Array(2).join(0)+departure_min).slice(-2);
    }
    else{
        newRow.insertCell(4).innerHTML = "--";
    }
    newRow.insertCell(5).innerHTML = staff_name;
    newRow.insertCell(6).innerHTML = staff_number;
    if(status){
        newRow.insertCell(7).innerHTML = status1;
    }
    else{
        newRow.insertCell(7).innerHTML = status0;
    }
    newRow.insertCell(8).innerHTML = bodyObj.rows[0].cells[cellCount - 1].innerHTML;
    bodyObj.rows[0].style.display = "none";
    
    alert("Success!!!!!");

    


}

function initial(){
    let year = document.getElementById("year");
    year.innerHTML = "";
    year.options.add(new Option("--", "--"));
    for (let i = 2000; i <= 2020; i++){
        year.options.add(new Option(i, i));
    }

    let hour = document.getElementById("arrival_hour");
    hour.innerHTML = "";

    hour.options.add(new Option("--", "--"));
    for (let i = 0; i < 24; i++){
        hour.options.add(new Option((Array(2).join(0)+i).slice(-2),i));
    }

    let month = document.getElementById("month");
    month.innerHTML = "";
    month.options.add(new Option("--", "--"));

    let day = document.getElementById("day");
    day.innerHTML = "";
    day.options.add(new Option("--", "--"));

    let min = document.getElementById("arrival_min");
    min.innerHTML = "";
    min.options.add(new Option("--", "--"));

    let a_hour = document.getElementById("departure_hour");
    a_hour.innerHTML = "";
    a_hour.options.add(new Option("--", "--"));

    let d_min = document.getElementById("departure_min");
    d_min.innerHTML = "";
    d_min.options.add(new Option("--", "--"));
}

function setMonth(){
    let month = document.getElementById("month");
    month.innerHTML = "";

    month.options.add(new Option("--", ));
    for (let i = 1; i <= 12; i++){
        month.options.add(new Option(i, i));
    }
    setDay();
}

function setDay(){
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day");
    let data = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    day.innerHTML = "";
    day.options.add(new Option("--", "--"));
    for(let i = 1; i <= data[month-1]; i++){
        day.options.add(new Option(i, i));
    }
    if(((year%4 == 0 && year%100 != 0) || year%400 == 0) && month == 2){
        day.options.add(new Option(29,29));
    }
}


function setArrival_min(){
    let min = document.getElementById("arrival_min");
    min.innerHTML = "";

    min.options.add(new Option("--", "--"));
    for (let i = 0; i < 60; i++){
        min.options.add(new Option((Array(2).join(0)+i).slice(-2),i));
    }
    setDeparture_hour();
    setDeparture_min();

}

function setDeparture_hour(){
    let hour = document.getElementById("arrival_hour").value;
    let a_hour = document.getElementById("departure_hour");
    a_hour.innerHTML = "";
    a_hour.options.add(new Option("--", "--"));
    let status1 = document.getElementById("optionsRadios1").checked;
    if(status1){
        for (let i = hour; i < 24; i++){
            a_hour.options.add(new Option((Array(2).join(0)+i).slice(-2),i));
        }
    }

    
}
function setDeparture_min(){
    let hour = document.getElementById("arrival_hour").value;
    let d_hour = document.getElementById("departure_hour").value;
    let min = document.getElementById("arrival_min").value;
    let d_min = document.getElementById("departure_min");
    d_min.innerHTML = "";
    d_min.options.add(new Option("--", "--"));
    if(d_hour == hour){
        for(let i = min+1; i < 60; i++){
            d_min.options.add(new Option((Array(2).join(0)+i).slice(-2), i));
        }
    }
    else{
        for(let i = 0; i < 60; i++){
            d_min.options.add(new Option((Array(2).join(0)+i).slice(-2), i));
        }
    }
}

function ignoreDeparture_time(){
    let a_hour = document.getElementById("departure_hour");
    a_hour.innerHTML = "";
    a_hour.options.add(new Option("--", "--"));
    let d_min = document.getElementById("departure_min");
    d_min.innerHTML = "";
    d_min.options.add(new Option("--", "--"));
}

function removeRow(inputobj){
    if(inputobj == null) return;
    let parentTD = inputobj.parentNode;
    let parentTR = parentTD.parentNode;
    let parentTBODY = parentTR.parentNode;
    parentTBODY.removeChild(parentTR);
}