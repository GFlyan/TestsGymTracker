// function countdown(minutes: number, seconds: number): void {
//     let totalSeconds = minutes * 60 + seconds;

//     const intervalId = setInterval(() => {
//         const min = Math.floor(totalSeconds / 60);
//         const sec = totalSeconds % 60;

//         if (totalSeconds === 0) {
//             clearInterval(intervalId);
//             console.log("Time's up!");
//         }

//         totalSeconds--;
//     }, 1000);
//     return(`${pad(min)}:${pad(sec)}`);
// }

// function pad(num: number): string {
//     return num.toString().padStart(2, '0');
// }

// countdown(2,0)