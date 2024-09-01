export default class MinHeap {
    public length: number;
    private heap: number[];
    private heapifyUp(curr: number){
        if (curr === 0) {
            return
        }
        let parent = Math.floor((curr-1)/2)
        if (this.heap[curr] < this.heap[parent]) {
            let temp = this.heap[parent];
            this.heap[parent] = this.heap[curr];
            this.heap[curr] = temp;
            this.heapifyUp(parent)
        }
        return
    }

    private heapifydown(curr: number){
        let lnd = this.leftChild(curr);
        let rnd = this.rightChild(curr);
        if (curr >= this.length-1 || lnd >= this.length) {
            return
        }
        if (this.heap[curr] > this.heap[lnd] && this.heap[lnd] < this.heap[rnd]) {
            let temp = this.heap[lnd];
            this.heap[lnd] = this.heap[curr];
            this.heap[curr] = temp;
            this.heapifydown(lnd)
        }
        else if (this.heap[curr] > this.heap[rnd] && this.heap[rnd] < this.heap[lnd]){
            let temp = this.heap[rnd];
            this.heap[rnd] = this.heap[curr];
            this.heap[curr] = temp;
            this.heapifydown(rnd)
        }
        return
    }

    private leftChild(curr: number): number{
        return (curr*2)+1
    }

    private rightChild(curr: number): number{
        return (curr*2)+2
    }

    

    constructor() {
        this.length = 0;
        this.heap = [];
    }

    insert(value: number): void {
        this.heap[this.length] = value;
        this.length++
        if (this.length === 1) {
            return
        }
        else{
            this.heapifyUp(this.length-1)
        }
        return

}
    delete(): number {
        if (this.length === 0) {
            return -1
        }
        let num = this.heap[0];
        this.length--
        this.heap[0] = this.heap[this.length]
        this.heapifydown(0);
        return num;
}
}