class Clock{
    constructor(hours,minutes,seconds,unit){

        this.hours=hours;
        this.minutes=minutes;
        this.seconds=seconds;
        this.unit=unit;
    }
     currTime(){
        if(this.hours<=24 && this.hours>0 && this.minutes<=60 && this.minutes>0 && this.seconds<=60 && this.seconds>0){
            if(this.hours<12){
                 this.unit="AM";
            }
            else{
                 this.unit="PM";
            }
            if(this.hours==12 || this.hours==24){
                this.hours=12
            }
            else{
                this.hours=this.hours%12;
            }
          
            console.log(this.hours+" : "+this.minutes+" : "+this.seconds+" "+this.unit);
        }
        else{
            console.log("The time you provided is incorrect");
        }
    }
} 
console.log("..........EX.1............");
const Time=new Clock(24,36,48,"");
// console.log(Time);
Time.currTime();


class Day{
    constructor(date,month,year){
        this.date=date;
        this.month=month-1;
        this.year=year-1;
        console.log(this.date+" : "+Number(this.month+1)+" : "+Number(this.year+1));
    }

    getNextDay(){
       const inputYear=this.year;
       const inputyear=this.year%400;
        this.year=inputYear-this.year;
        this.year=inputyear-(this.year%100);
        let result=0;
        if(this.year==100){
            result+=5;
        }
        if(this.year==200){
            result+=3;
        }
        if(this.year==300){
            result+=1;
        }
      
        this.year=inputYear%100;
        let leafyear=((this.year-(this.year%4))/4);
        let ordinaryyear=(inputYear%100)-leafyear;
        result+=(leafyear*2)+ordinaryyear;
        
        const numOfMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
        for(let i=0; i<this.month; i++){
             result+=numOfMonth[i]%7;
        }
        

        result+=this.date+1;

        const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        result=result%7;
      
        console.log("Next Day : "+day[result]);

       

    }
}


console.log("..........EX.2............");
const dayFinder=new Day(28,11,2005);
// console.log(dayFinder);
dayFinder.getNextDay();
const dayFinder1=new Day(26,05,2003);
dayFinder1.getNextDay();
const dayFinder2=new Day(18,08,2007);
dayFinder2.getNextDay();


class DayCalculator{
    constructor(date,month,year){
        this.date=date;
        this.month=month-1;
        this.year=year-1;
        console.log(this.date+" : "+Number(this.month+1)+" : "+Number(this.year+1));
    }

    getCurrDay(){
       const inputYears=this.year;
       const inputyears=this.year%400;
        this.year=inputYears-this.year;
        this.year=inputyears-(this.year%100);
        let results=0;
        if(this.year==100){
            results+=5;
        }
        if(this.year==200){
            results+=3;
        }
        if(this.year==300){
            results+=1;
        }
      
        this.year=inputYears%100;
        let leafyears=((this.year-(this.year%4))/4);
        let ordinaryyears=(inputYears%100)-leafyears;
        results+=(leafyears*2)+ordinaryyears;
        
        const numOfMonths=[31,28,31,30,31,30,31,31,30,31,30,31];
        for(let j=0; j<this.month; j++){
             results+=numOfMonths[j]%7;
        }
        

        results+=this.date;

        const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        results=results%7;
      
        console.log("Current Day : "+days[results]);

       

    }
}


console.log("..........EX.3............");
const dayFinders=new DayCalculator(28,11,2005);
// console.log(dayFinder);
dayFinders.getCurrDay();
const dayFinders1=new DayCalculator(26,05,2003);
dayFinders1.getCurrDay();
const dayFinders2=new DayCalculator(18,08,2007);
dayFinders2.getCurrDay();
