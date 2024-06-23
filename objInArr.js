const check=(x,y,z)=>{
    if(x==="X" && y==="X" && z==="X"){
        return true;
    }
    else if(x==="O" && y==="O" && z==="O"){
        return true;
    }
    else{
        return false;
    }
}

const arr=["X","O","X","O","X","O","O","O","X"];

if(check(arr[0],arr[1],arr[2]) || check(arr[3],arr[4],arr[5]) || check(arr[6],arr[7],arr[8])){
    console.log("wins")
}
else{
    console.log("loses")
}

