const args = process.argv;
let array = args.slice(2)
for (let time of array) {
    if (array < 0) { 
        console.log('no output');
    } else {
        setTimeout(() => {
            process.stdout.write('beep');
          }, time * 1000);
    }
}