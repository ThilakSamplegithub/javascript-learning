const url="https://jsonplaceholder.typicode.com/posts"
//console.log(fetch(url))
// this file I choosed to create data using post request go and see create resource just copy and paste
// directly see result of created data in body after saving
fetch(url,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then(response=>{
    if(response.ok){
    return response.json()
    }else{
        throw new Error('something went wrong')
    }
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log('inside catch')
    console.log(error)
})