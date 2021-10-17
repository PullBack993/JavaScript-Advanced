// function piecePie(pieflavors, startWort, endWord){
//     let startindex = 0;
//     let endindex = 0;
//     for (let i = 0; i < pieflavors.length; i++) {
//         if (pieflavors[i] == startWort){
//             startindex = i;
//         }
//         if (pieflavors[i] == endWord){
//             endindex = i
//         }
//     }
//     let result = pieflavors.slice(startindex, endindex+1);
//     console.log(result);
// }

function piecePie(pies, startFlavor, endFlavor){
    const start = pies.indexOf(startFlavor);
    const end = pies.indexOf(endFlavor) + 1;
    const result = pies.slice(start, end);
    return result
}



piecePie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)


piecePie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)