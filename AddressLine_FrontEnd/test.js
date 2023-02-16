let longAddr = "this is a really long address with lots of words longer than 35 characters all over the place and i dont know where it is going to stop it just keeps going so it's like the longest address in the world which is a little bit crazy but there you go";

let addr = ["","","","",""];

for(let i = 0; i < 5 && longAddr.length > 0; i++){

    if(longAddr.length < 35 || i == 4)
    {
        addr[i] = longAddr;
        break;
    }
    
    let cut = 35;
    while(longAddr[cut] !== " " && cut > 0)
        cut--;
    if(cut == 0) //word longer than 35 chars here
      cut = 35;
    
    addr[i] = longAddr.slice(0, cut);
    longAddr = longAddr.slice(cut + 1);
}

console.log(addr);