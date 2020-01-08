const hasNumber = (value) => {
return  new RegExp(/[0-9]/).test(value)
    
}

const hasSmallAlphabets = (value) => {
return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value) ;   
}



const hasSpcialCharacters = (value) => {
return new RegExp(/[!@#$%^&*)(+=-_]/).test(value);
    
}

export const strengthIndicator = (value) => {
const matched=[];
if((value.length > 6)) matched.push('greater-than-7') ;
if((value.length > 8) ) matched.push('greater-than-9');
if(hasNumber(value)) matched.push('has-numbers');
if(hasSmallAlphabets(value)) matched.push('has-Small-Alphabets');
if(hasSpcialCharacters(value)) matched.push('has-SpcialCharacters');

return matched.length ;
}



export const strengthColor = (count)=>{
    if(count < 3 ) return 'red';
    if(count < 4 ) return 'yellow';
    if(count < 5 ) return 'orange';
    if(count < 7 ) return 'green';

    
}