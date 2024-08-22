type Node<T> ={
    value:T;
    next?:Node<T>;
}
export default class Stack<T> {
    public length: number;
    private last?: Node<T>;
    

    constructor() {
        this.last = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value:item} as Node<T>;
        if (this.length === 0) {
            this.last = node
        }
        else{
            node.next = this.last
            this.last = node
        }
        this.length++;

}
    pop(): T | undefined {
        if (this.length === 0) {
            return undefined
        }
        else{
            const node = {value:this.last?.value, next: this.last} as Node<T>;
            this.last = this.last?.next;
            this.length--;
            return node.value;
        }

}
    peek(): T | undefined {
        return this.last?.value;
}
}