async function getFiveTodos() {
    let response=await fetch(" https://jsonplaceholder.typicode.com/todos?_limit=5&_sort=title")
    if(!response.ok){
     throw new Error('there is an error')
    }
   let data= await response.json()
   return data
//   console.log(data)
    
  }
getFiveTodos() 
.then((data)=>console.log(JSON.stringify(data,null,2))) 
.catch((err)=>console.log(err))
// instructors way
// async function getFiveTodos() {
//     try {
//       let res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=5&_sort=title"
//       );
//       let todos = await res.json();
//       return todos;
//     } catch (error) {
//       return "something went wrong while fetching todos.";
//     }
//   }
//   getFiveTodos()
//   .then((data)=>console.log(data))
  //till here instructors way
async function getUsers() {
    let response=await fetch(' https://jsonplaceholder.typicode.com/users')
      if(!response.ok){
        throw new Error('Please check url')
      }
    let data=await response.json()
    return data
  }
 let se = getUsers()
//   .then((data)=>console.log(data))
  .then((data)=>console.log(JSON.stringify(data,null,2)))
  .catch((err)=>console.log(err))
 
  // onather function
  async function getWellFormattedData() {
      let getName=await getUsers()
      let gettitleand= await getFiveTodos()
      let names=getName.reduce((acc,el)=>{
        acc[el.id]=el.name
        return acc
      },{})
    let unsortedArr=gettitleand.map((items)=>{
      let obj={}
      obj.userId=items.userId
      obj.name=names[items.userId]
      obj.toDoTitle=items.title
      return obj
    })
    let sortedArr=unsortedArr.sort((a,b)=>a.userId-b.userId)
     return sortedArr
    }
    getWellFormattedData()
    .then((data)=>console.log(data))
    
  
  

let s=[2,35,6,5]
