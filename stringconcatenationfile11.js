/*let string1 = "Thilak";
let string2 = "deepak";
let newstring = string1+" "+string2;
console.log(newstring)
let second = "44";
let first= "55"
let third = first+second
console.log(third)
//strings r converted into numbers and added
let numb1 = +"24";
let numb2 = +"43";
let numb = numb1+numb2;
console.log(numb)
// or
numb1 = Number(numb1)
numb2 = Number(numb2)
numb= numb1+numb2
console.log(numb)
  
// lets bring numbers horizontally
let bag=''
for(let i=0;i<=5;i++){
   bag=bag+i
}
console.log(bag,'is concatenated as shopkeeper puts groceries in my empty bag')
//************************ */
let name='Ronald'
// i want to change the string from R to D and make it Donald
name[0]='D'
console.log(name)// can't change
// long method said by sir using array
let arr=[]
for(let i=0;i<=name.length-1;i++){
   arr.push(name[i])
}
console.log(arr)
arr[0]='D'
console.log(arr)
// lets convert  back in to string using concatenation
let bag1=''
for(let i=0;i<=arr.length-1;i++){
   bag1=bag1+arr[i]
}
console.log(bag1)
//******** */
// short cut notice in both concatenation is useful to change string but its new string
let bag=''
for(let i=0;i<=name.length-1;i++){
   if(name[i]==='R'){
      bag=bag+'D'
   }else{
      bag=bag+name[i]
   }
}
console.log(bag)
// Now to add into the string
let alpha='abc'
let bag2='l'
bag2=alpha+bag2
console.log(bag2)
// how to remove character in string
let fiction='SUPERMAN' // remove 'N'
let bag3=''
for(let i=0;i<=fiction.length-1;i++){
   if(fiction[i]=='N'){
      break;
   }//else{
      bag3=bag3+fiction[i]
   }

//}
console.log(bag3)
 // if I wanna remove only M from 'superman'
 let bag4=''
 for(let i=0;i<=fiction.length-1;i++){
   if(fiction[i]==='M'){
      continue;
   }
      bag4=bag4+fiction[i]
   
 }
 console.log(bag4)
 console.log('**************')
 let author='ARTHOR'
 // add k after T
 let bag5=''
 for(let i=0;i<=author.length-1;i++){
   bag5=bag5+author[i]
   if(author[i]==='T'){
      bag5=bag5+'K'
   }
 }
console.log(bag5)
console.log('********************')
let name1='Aman'
// add U after a
let bag6=''
for(let i=0;i<=name1.length-1;i++){
   bag6=bag6+name1[i]
   if(name1[i]==='a'){
      bag6=bag6+'U'
   }
}
console.log(bag6)
let arr1=['Aman','chaman','ArthiA','Shukla']
// find no of strings starting with A
let count=0
for(let i=0;i<=arr1.length-1;i++){
  
   for(let j=0;j<=arr1[i].length-1;j++){
      if(arr1[i][j]==='A'){
         count++
         break;  // i wanna stop at 1st A only so i used break
      }
   }
 
   
}
console.log(count)
// form two strings out of 1string named Nrupul
function twoStringsFromOne(N, str) {
   let bag=''
   let bag1=''
   let low=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
   //let vowels='aeiou'
   for(let i=0;i<=N-1;i++){
       for(let j=0;j<=low.length-1;j++){
           if(str[i]=='a'||str[i]=='e'||str[i]=='o'||str[i]=='i'||str[i]=='u'){
               bag=bag+str[i]
               break;
           }else if(str[i]===low[j])  {
               bag1=bag1+str[i]
               
           }else{
               bag=bag+''
           }
       }
   }
   console.log(bag)
   console.log(bag1)     //write code here
  }
// Description

/*You are given an array of strings, whose size is stored in a variable with the nameN

The string array, is stored in a variable with the namearr

You have to find how many of the strings stored in the array arr, areweak, and how many of them arestrong

A string is considered as strong if it contains at least one of the following characters in it@,$,#,*

Consider the example, in which the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

The first string "test123", does not contain any of the required characters, hence the string is weak

The second string "new@t", contains the character `@`, hence the string is strong

The third string "mon*y", contains the character `*`, hence the string is strong

The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
Therefore, the required output becomesweak strong strong weak

Input
The first line of the input contains the value stored inN

The next line containsNspace separated string denoting the values stored in the string array


Output
For each string present inarr, print whether the string isweakorstrong

Sample Input 1 

4
test123 new@t mon*y nrupul
Sample Output 1

weak strong strong weak
Hint

In the sample test case, the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

The first string "test123", does not contain any of the required characters, hence the string is weak

The second string "new@t", contains the character `@`, hence the string is strong

The third string "mon*y", contains the character `*`, hence the string is strong

The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
Therefore, the required output becomesweak strong strong weak*/  
