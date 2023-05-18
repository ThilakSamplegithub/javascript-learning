const users=[
    {
        userId:1,
        firstName:"harshit",
        gender:"male"

    },
    {
        userId:2,
        firstName:'mohit',
        gender:'male'
    },
    { 
        userId:3,
        firstName:'Nitish',
        gender:"male"
    }
]

// using iteration like forofloop
for(let user of users){
   //console.log(user)   // its gives total object
    console.log(user['userId']) // its gives key value of any key we desire like I want info about key:userId
    console.log(user.gender) // its gives key value of any key we desire like I want info about key:gender
    console.log(user.firstName)// its gives key value of any key we desire like I want info about key:firstName
}
//nested destructuring will be done in other new file
//var[user1,user2,user3]=users
//var[{userId},{firstName},{gender}]=users
//console.log(user1,user2,user3)
/*## **Problem-1 User Age Filter**

- Given a list of user data with name and age, create a list of key-value pairs from the input
- From the generated data, print the users whose age is more than 30
- Sample Input

```
["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
[32, 30, 26, 28, 44]

```

- Sample Data Stored `[]` - List `{}` - Key-Value Pairs

```
[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]

```

- Sample Output

`Nrupul Yogesh`*/
//sol:
let arr1= ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let arr2=[32, 30, 26, 28, 44]
let obj1={}
let obj2={}
let obj3={}
let obj4={}
let obj5={}
let arr=[]
for(let i=0;i<=arr1.length-1;i++){
  for(let j=0;j<=arr2.length-1;j++){
    if(i==0 && j==0){
      obj1["name"]=arr1[i]
      obj1['age']=arr2[j]
    }else if(i==1 && j==1){
      obj2['name' ]=arr1[i]
      obj2["age"]=arr2[j]
    }else if(i===2 && j===2){
      obj3["name"]=arr1[i]
      obj3["age"]=arr2[j]
    }else if(i==3 && j==3){
     obj4["name"]=arr1[i]
      obj4["age"]=arr2[j]
    }else if(i==4 && j==4){
      obj5["name"]=arr1[i]
      obj5["age"]=arr2[j]
    }  
  }
}
arr.push(obj1,obj2,obj3,obj4,obj5)
console.log(arr)
// now lets find whose age>30
for(let i=0;i<=arr.length-1;i++){
  if(arr[i]['age']>30){
    console.log(arr[i]['name'])
  }
}