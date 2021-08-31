function s (){
    let s= 0; 
    let j=1;
    let k=3;
    for (let i=0; i <=10; i++, j += 4, k += 4){
        s= s + ((4/j) - (4/k));
    }
    console.log(s);
}

s();

function factorial(n){ 
    let resultado= 1;
    for (let i=1; i <= n; i++){
       resultado= resultado * i;
    }
    return resultado;
}


function e (){
    let e=0;
    for (let i = 1; i <= 10; i++){
        e= e + (1/factorial(i));
    }
    console.log("e = " + (e + 1));
    return e;
}

e();