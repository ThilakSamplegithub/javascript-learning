let tempIntdegree=+(prompt("guess number"));
if(tempIntdegree<0){
    console.log("it's extremely cold")
}else if(tempIntdegree<15){
    console.log("its cold out")
}else if(tempIntdegree<25){
    console.log("its room temp")
}else if(tempIntdegree<35){
    console.log("lets go to swim ")
}else if(tempIntdegree<45){
    console.log("its extremely hot")
}else{
    console.log("dont go out")
}
// now lets see with >=
if(tempIntdegree>=45){
    console.log("it damn hot")
}else if(tempIntdegree>=35){
    console.log("its extremely hot ")
}else if (tempIntdegree>=25){
    console.log("lets go to swim")
}else if(tempIntdegree>=15){
    console.log("its cold")
}else if(tempIntdegree>=0){
    console.log("its extremely cold")
}else{
    console.log("its danger")
}