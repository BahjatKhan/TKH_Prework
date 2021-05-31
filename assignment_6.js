console.log("--------------------------------------------");
var array= ['Retta','Vern','Marica','Cyrus','Linette','Curt','Nichole','Jesica','Wynell','Michaele'];

const findLongestName=function(array){

  //  const [Retta,Vern,Marica,Cyrus,Linette,Curt,Nichole,Jesica,Wynell,Michale]=[...array];
  let longest_name=0;
  let answer='';
  for (let i = 0 ; i< array.length; i++){
    if (array[i].length>longest_name){
        longest_name = array[i].length;
        answer=array[i];
    }  
 }
  console.log(answer);
}

findLongestName(array);