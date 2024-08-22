export default function bs_list(haystack: number[], needle: number): boolean {
    let High = haystack.length;
    let Low = 0;
    do {
        let mid = Math.floor((Low + (High - Low) / 2));
        let value = haystack[mid];
        if (value === needle) {
            return true          
        }
        else if(value > needle){
            High = mid;
        }
        else{
            Low = mid+1;
        }
    } while (Low < High);
    return false
}