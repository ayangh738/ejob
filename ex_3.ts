var fact=(h:number):number=>{
    let f:number=1;
    for (let k=1;k<=h;k++){
        f=f*k;
    }
    return f;
}
console.log(fact(6));