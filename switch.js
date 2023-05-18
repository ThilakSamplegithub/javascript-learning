//lets do first by ifelseifelse
let day = +(prompt("guess days number"))
console.log(typeof day)
if(day===0){
    console.log("sunday")
}else if(day===1){
    console.log("monday")
}else if(day===2){
    console.log("tuesday")
}else if(day===3){
    console.log("weds")
}else if(day===4){
    console.log("thursday")
}else if(day===5){
    console.log("friday")
}else if(day===6){
    console.log('saturday')
}else{
    console.log("its invalid")
}
// now lets do using switch
switch(day){
    case 0:
        console.log("sunday");
        break
        case 1:
            console.log("monday");
            break
            case 2:
                console.log("tuesday")
                break
                case 3:
                    console.log("weds")
                    break
                    case 4:
                        console.log("thursday")
                        break
                        case 5:
                            console.log("friday")
                            break
                        case 6:
                             console.log("saturday")
                             break
                          default :
                                console.log("invalid")
}