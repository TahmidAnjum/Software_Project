const getGPA = (num) =>{
    if(num>=80) return 4.00;
    if(num>=75) return 3.75;
    if(num>=70) return 3.50;
    if(num>=65) return 3.25;
    if(num>=60) return 3.00;
    if(num>=55) return 2.75;
    if(num>=50) return 2.50;
    if(num>=45) return 2.25;
    if(num>=40) return 2.00;
    if(num<40)  return 0.00;
  }


  for(let i=0;i<5;i++)
  {
    let num = Math.floor(Math.random() * (100 - 70) ) + 70;
    console.log(num,getGPA(num));
  }