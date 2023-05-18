const key1="objkey1"
const key2="objkey2"
const value1="myvalue1"
const value2="myvalue2"
const obj={}
obj[key1]=value1
obj[key2]=value2
console.log(obj)
//computed properties way
const object={
    [key1]:"myvalue1",
    [key2]:"myvalue2"
}
console.log(object)  // here I dont get result as key1&key2 didnt change so I will apply computed properties as [key1] instead of key1

