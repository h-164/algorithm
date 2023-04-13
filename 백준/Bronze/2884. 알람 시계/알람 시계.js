const rl = require('readline').createInterface(process.stdin);

rl.on('line', (input)=>{
    let hour = parseInt(input.split(' ')[0]);
    let minute = parseInt(input.split(' ')[1])-45;

    if (minute<0) {
        hour -= 1;
        minute = 60+minute;
        if (hour<0) hour = 24+hour
    }
    console.log(hour, minute);

    rl.close();
});

