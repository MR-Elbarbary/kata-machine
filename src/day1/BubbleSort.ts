export default function bubble_sort(arr: number[]): void {
let l = arr.length;
for (let i = 0; i < l; i++) {
    for(let j = 0; j < (l - 1) - i ; j++){
        if (arr[j] > arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j +1];
            arr[j+1] = temp;
        }
    }
}
}