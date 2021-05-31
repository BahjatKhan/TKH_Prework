
console.log("--------------------------------------------");
var names_array=['boc','jimmy','max b','bernie','jordan','future hendrix'];

const finder=function(array){

    for (let i=0 ;i<array.length;i++){
            
        let str= array[i];
        let newStr=str.replace(/\s/g,'');
        //console.log(newStr);
//FOR EVEN STR
        if (newStr.length % 2 == 0){
            const firstChar= newStr.charAt(0);
            //console.log(newStr);
            var finalRes= newStr.replace(firstChar,'b');
            //console.log(finalRes);
            
            
        }else{
            const lastChar= newStr.charAt(newStr.length-1);
            var result= newStr.replace(lastChar,'c');
            //console.log(`${newStr},${lastChar}`);
            
            console.log(result);
         }
 }
}
finder(names_array);

