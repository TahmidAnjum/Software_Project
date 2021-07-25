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
    if(num<40 )  return 0.00;
  }
  const getGrd = (num) =>{
    if(num>=4.00) return 'A+' ;
    if(num>=3.75) return 'A';
    if(num>=3.50) return 'A-';
    if(num>=3.25) return 'B+';
    if(num>=3.00) return 'B';
    if(num>=2.75) return 'C+';
    if(num>=2.50) return 'C';
    if(num>=2.25) return 'D+';
    if(num>=2.00) return 'D';
    if(num< 0.00) return 'F';
  }

 const map1 = new Map();
 map1.set()
 console.log(map1);