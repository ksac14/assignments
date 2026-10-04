let students : Array<string> = ["Suresh","Mahesh","Naresh"]
let marks :number[] = [75, 80, 82]
let updatedMarks: number[] = []
let sum : number = 0
console.log("Updated Marks:")
for(let i =0;i<marks.length;i++) {
    updatedMarks[i] = marks[i]! + 10
    sum = sum + updatedMarks[i]!
    console.log(`${students[i]}: ${updatedMarks[i]}`);
}
console.log(`Average Marks: ${(sum/marks.length).toFixed(1)}`)

