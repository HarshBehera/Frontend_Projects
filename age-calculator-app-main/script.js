const output_year=document.querySelector(".output-year");
const output_month=document.querySelector(".output-month");
const output_day=document.querySelector(".output-day");
const submit_btn=document.querySelector("#submit");

const input_year=document.querySelector("#year");
const input_month=document.querySelector("#month");
const input_day=document.querySelector("#day");

const error= document.querySelectorAll(".error");

submit_btn.addEventListener("click",calculateAge);
let isValid=false;

input_day.addEventListener("input", e =>{
    if(+input_day.value>31){
        error[0].textContent="Must be a valid date";
        isValid= false;
        return;
    }
    else{
        isValid=true;
        error[0].textContent="";
    }
    if(+input_day.value===0){
        isValid=false;
        error[0].textContent="This field is required";
        return ;

    }
    else{
        error[0].textContent="";
    }

})

input_month.addEventListener("input", e =>{
    if(+input_month.value>12){
        error[1].textContent="Must be a valid month";
        isValid= false;
        return;
    }
    else{
        isValid=true;
        error[1].textContent="";
    }
    if(+input_month.value===0){
        isValid=false;
        error[1].textContent="This field is required";
        return ;

    }
    else{
        error[1].textContent="";
    }

})

input_year.addEventListener("input", e =>{
    let date=new Date();
    if(+input_year.value>date.getFullYear()){
        error[2].textContent="Must be a valid year";
        isValid= false;
        return;
    }
    else{
        isValid=true;
        error[2].textContent="";
    }
    if(+input_year.value===0){
        isValid=false;
        error[2].textContent="This field is required";
        return ;

    }
    else{
        error[2].textContent="";
    }

})

function calculateAge(){
    if(isValid){
        let birthday= `${input_month.value}/${input_day.value}/${input_year.value}`;
        let birthdayObj = new Date(birthday);
        console.log(birthdayObj)
        console.log(Date.now())
        let ageDiffMill= Date.now()-birthdayObj;
        let age= new Date(ageDiffMill);
        let ageYears=age.getUTCFullYear()-1970;
        let ageMonth=age.getUTCMonth();
        let ageDay=age.getUTCDate()-1;
        output_day.textContent=ageDay;
        output_month.textContent=ageMonth;
        output_year.textContent=ageYears;
    }
    else{
        alert("error")
    }
}