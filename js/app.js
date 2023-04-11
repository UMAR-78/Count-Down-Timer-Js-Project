// Yha pr jo b date ayge wo waha change hoge 
const endDate = "21 April 2023 2:59 PM"
document.getElementById("end_date").innerText = endDate;
const Input  = document.querySelectorAll("input") 


function clock()
{
    // This is time that will be on the endDate
    const end = new Date(endDate);
   
    // This is time that is now
    const now = new Date(); 
    //  Calculate Difference
    // This difference will give us value in miliseconds and we have to used this 
    // value to calculate days hours and minutes and seconds
    const diff = (end- now) / 1000;  


    // This is because to prevent frm negative value
    if(diff < 0)
    {
        return
    }
    // For Days
    // 86400000 = miliseconds in a day
    // const days = diff/ 3600 / 24;
    Input[0].value = Math.floor(diff/ 3600 / 24);


    // For Hours
    // const hours = ((diff / 3600 ) % 24 )
    // console.log(Math.floor(hours));
    Input[1].value = Math.floor(diff/ 3600 ) % 24


    // For minutes
    // const minutes = ((diff / 60 ) % 60 )
    Input[2].value = Math.floor(diff / 60 ) % 60;
    // console.log(minutes)
    

    // For Seconds
    // const seconds =  (diff) % 60 
    Input[3].value = Math.floor(diff) % 60






}

clock();


setInterval(() => {
    clock();
}, 1000);