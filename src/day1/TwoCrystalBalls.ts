export default function two_crystal_balls(breaks: boolean[]): number {
let l = 0;
let h = breaks.length;
let m = Math.floor(l + (h+l)/2);
do {
    if(breaks[m]){
        h = m;
    }
    else{
        l = m
    }
} while (l != (h - 1));
return m
}