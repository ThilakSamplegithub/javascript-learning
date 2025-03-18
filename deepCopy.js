// There are 2 methods this is recursive method
const obj = {
    junction:"song",
    user: {
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
      }
    },
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    },
    stats: {
      posts: 45,
      followers: 1200,
      following: 300
    }
  };
  
  console.log(obj);
  function makeDeepCopy(obj){
    if(typeof(obj)!=="object"||obj==null){
      return obj
    }
    const copiedVal=Array.isArray(obj)?[]:{}
    const keys=Object.keys(obj)
    for(let i=0;i<keys.length;i++){
      copiedVal[keys[i]]=makeDeepCopy(obj[keys[i]])
    }
    return copiedVal
  }
  const obj2=makeDeepCopy(obj)
  obj2.user.name="changed"
  console.log(obj2.user.name)
  console.log(obj.user.name)
//   onather is json method
const obj3=JSON.parse(JSON.stringify(obj))
obj3.user.name="new Changes"
console.log(obj3.user.name)