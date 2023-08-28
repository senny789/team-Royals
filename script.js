const list=document.querySelectorAll('li');
const input=document.querySelectorAll('input')
const inputs=document.querySelector('input.from');
const output=document.querySelector('input.to')
const select=document.querySelectorAll('select');
const option=document.querySelectorAll('option');
const io=document.querySelector('.io')
let casse=''
let result=''
list.forEach(li=>{
    li.addEventListener('click',(e)=>{
        console.log(e.target);
        let classname=e.target.classList[0];
        
         selectOp(classname)
         input.forEach(inn=>{
             if(!inn.classList.contains(classname)){
                inn.classList.add(classname)
             }
             
                inn.classList.forEach(cl=>{
                    if(cl!==classname)
                    inn.classList.remove(cl);
                })  
                console.log(inn.classList)
            
         })
         console.log(classname)
         switch(classname)
         {
             case 'length':
                 casse='mm'
                 result='mm'
                 io.style.backgroundImage="url('images/length.jpg')"
                 io.style.color="black"
                 io.style.backgroundPosition="top"
                 break;
            case 'mass':
                casse='kg'
                result='kg'
                io.style.backgroundImage="url('images/mass.jpg')"
                io.style.color="white"
                io.style.backgroundPosition="top"
                break;
            case 'time':
                casse='ms'
                result='ms'
                io.style.backgroundImage="url('images/time.jpg')"
                io.style.color="white"
                io.style.backgroundPosition="center"
                break;
            case 'temperature':
                casse='celcius'
                result='celcius'
                io.style.backgroundImage="url('images/temp.webp')"
                io.style.color="black"
                io.style.backgroundPosition="top"
                break;
            
         }
         
    })
})

select.forEach(selec=>{

    selec.addEventListener('change',(e)=>{
        if(selec.options[selec.selectedIndex].classList.contains('from')){
            casse=selec.options[selec.selectedIndex].text
        }
        else{
            result=selec.options[selec.selectedIndex].text
        }
          
    })
})

const selectOp=(clas)=>{
    select.forEach(sel=>{
    if(sel.classList==clas)
    {
        sel.style.display='block';
    }
    else{
        sel.style.display='none';
    }
})
}
inputs.addEventListener('change',e=>{
    console.log(casse,result)
   if(casse=='kg')
   {

       switch(result)
       {
           case 'kg':
               output.value=inputs.value
               break;
           case 'gm':
               output.value=inputs.value*1000
               break;
           case 'mg':
               output.value=inputs.value*1000000
               break;
           
       }
    
   }
   else if(casse=='gm')
    {
        switch(result)
        {
            case 'kg':
               output.value=inputs.value/1000
               break;
           case 'gm':
               output.value=inputs.value
               break;
           case 'mg':
               output.value=inputs.value*1000
               break;
        }
    }
    else if(casse=='mg')
    {
        switch(result)
        {
            case 'kg':
               output.value=inputs.value/1000000
               break;
           case 'gm':
               output.value=inputs.value/1000
               break;
           case 'mg':
               output.value=inputs.value
               break;
        }
    }
    //length
    else if(casse=='mm')
    {
        switch(result)
        {
            case 'mm':
               output.value=inputs.value
               break;
           case 'cm':
               output.value=inputs.value/10
               break;
            case 'm':
                output.value=inputs.value/1000
                break;
           case 'km':
               output.value=inputs.value/1000000
               break;
        }
    }
    else if(casse=='cm')
    {
        switch(result)
        {
            case 'mm':
                output.value=inputs.value*10
                break;
            case 'cm':
                output.value=inputs.value
                break;
             case 'm':
                 output.value=inputs.value/100
                 break;
            case 'km':
                output.value=inputs.value/100000
                break;
        }
    }
    else if(casse=='m')
    {
        switch(result)
        {
            case 'mm':
               output.value=inputs.value*1000
               break;
           case 'cm':
               output.value=inputs.value*100
               break;
            case 'm':
                output.value=inputs.value
                break;
           case 'km':
               output.value=inputs.value/100
               break;
        }
    }
    else if(casse=='km')
    {
        switch(result)
        {
            case 'mm':
               output.value=inputs.value*1000000
               break;
           case 'cm':
               output.value=inputs.value*100000
               break;
            case 'm':
                output.value=inputs.value*1000
                break;
           case 'km':
               output.value=inputs.value
               break;
        }
    }
    //time
    else if(casse=='ms')
    {
        switch(result)
        {
            case 'ms':
               output.value=inputs.value
               break;
           case 'ns':
               output.value=inputs.value*1000000
               break;
           case 's':
               output.value=inputs.value/1000
               break;
           case 'min':
               output.value=inputs.value/60000
               break;
           case 'hour':
               output.value=inputs.value/3,600,000 
               break;
        }
    }
    else if(casse=='ns')
    {
        switch(result)
        {
            case 'ms':
               output.value=inputs.value/1000000
               break;
           case 'ns':
               output.value=inputs.value
               break;
           case 's':
               output.value=inputs.value/(1000000000)
               break;
           case 'min':
               output.value=inputs.value/(6*1000000000)
               break;
           case 'hour':
               output.value=inputs.value/(3.6*1000000000000)
               break;
        }
    }
    else if(casse=='s')
    {
        switch(result)
        {
            case 'ms':
               output.value=inputs.value*1000
               break;
           case 'ns':
               output.value=inputs.value*1000000000
               break;
           case 's':
               output.value=inputs.value
               break;
           case 'min':
               output.value=inputs.value/60
               break;
           case 'hour':
               output.value=inputs.value/3600
               break;
        }
    }
    else if(casse=='min')
    {
        switch(result)
        {
            case 'ms':
               output.value=inputs.value*60000
               break;
           case 'ns':
               output.value=inputs.value*60000000000
               break;
           case 's':
               output.value=inputs.value*60
               break;
           case 'min':
               output.value=inputs.value
               break;
           case 'hour':
               output.value=inputs.value/60
               break;
        }
    }
    else if(casse=='hour')
    {
        switch(result)
        {
            case 'ms':
               output.value=inputs.value*3600000
               break;
           case 'ns':
               output.value=inputs.value*(3.6*1000000000000)
               break;
           case 's':
               output.value=inputs.value*3600
               break;
           case 'min':
               output.value=inputs.value*60
               break;
           case 'hour':
               output.value=inputs.value
               break;
        }
    }
    //temperature
    else if(casse=='kelvin')
    {
        switch(result)
        {
            case 'celcius':
               output.value=inputs.value-273.15
               break;
           case 'kelvin':
               output.value=inputs.value
               break;
           case 'fahrenheit':
               output.value=(inputs.value - 273.15) * (9/5) + +32
               break;
        }
    }
    else if(casse=='celcius')
    {
        switch(result)
        {
            case 'celcius':
               output.value=inputs.value
               break;
           case 'kelvin':
               output.value= +(inputs.value ) +  +273.15
               break;
           case 'fahrenheit':
               output.value=(inputs.value *(9/5)) + 32
               break;
        }
    }
    else if(casse=='fahrenheit')
    {
        switch(result)
        {
            case 'celcius':
               output.value=(inputs.value -32) * (5/9)
               break;
           case 'kelvin':
               output.value=(inputs.value- 32) * (5/9) + 273.15
               break;
           case 'fahrenheit':
               output.value=inputs.value
               break;
        }
    }
    
    
})

