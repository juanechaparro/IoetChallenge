
     var text ;

const pairs = (schedules)=>{
        // let paired = [];
        let pairsCounter = {};
        for (i = 0 ; i<  schedules.length; i++){
            for (j = i+1 ; j<  schedules.length; j++){
    
             for (k = 0 ; k<  schedules[i].hours.length; k++){
                for (m = 0 ; m<  schedules[j].hours.length; m++){  
         

                    if (schedules[i].hours[k].day === schedules[j].hours[m].day){
                        if(schedules[i].hours[k].time [0] <= schedules[j].hours[m].time[1] && schedules[i].hours[k].time[1]>= schedules[j].hours[m].time[0]  ){
                            // paired.push(`${schedules[i].worker} - ${schedules[j].worker}`)
                            // console.log(`${schedules[i].worker} - ${schedules[j].worker}`)
                            if (!(`${schedules[i].worker} - ${schedules[j].worker}` in pairsCounter)){
                                pairsCounter[`${schedules[i].worker} - ${schedules[j].worker}`] = 1;
                            }
                            else {
                                pairsCounter[`${schedules[i].worker} - ${schedules[j].worker}`] ++;
                            }
                            
                        }
                    }
                }
    
    } 
        } 
    }
    console.log("Output",pairsCounter);
    // console.log('paireds', paired);
    return <pairsCounter></pairsCounter>;
    } 

     
const distribution = (array)=>{
    let schedules = []
    for (i = 0 ; i< array.length; i++){
        if (i===0){
            let schedule ={
                worker: array[0][0] ,
                hours : array[1][0].split(',')
    
            }
        
            schedules.push(schedule)
        }
            else if(i<array.length-1){
                let schedule ={
                    worker: array[i][1] ,
                    hours : array[i+1][0].split(',')
        
                }
                schedules.push(schedule)
            }  
    }
    for (j = 0 ; j<  schedules.length; j++){
        let  dates = []
        for (k = 0 ; k<  schedules[j].hours.length; k++){
           
      let appointment = {
                day: schedules[j].hours[k].substr(0,2),
                time: schedules[j].hours[k].substr(2).split("-")
                  
            }
         dates.push(appointment);
         
    }
    schedules[j].hours = dates;
}
   
// console.log(schedules)
pairs(schedules)
}
 

document.getElementById('inputfile')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
       
            fr.onload=function(){
                document.getElementById('output')
                        .textContent=fr.result;
                        text =fr.result
                        var array = text.split('=');
                        var horarios =[];
                        for (let i = 0 ; i< array.length; i++){
                            horarios.push(array[i].split('\r\n'))
                        };
                      
                        distribution(horarios);
            }
              
            fr.readAsText(this.files[0]);
           
        })
// 