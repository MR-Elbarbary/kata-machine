type Node<T> = {
    value:T;
    next?:Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tale?: Node<T>;
    

    constructor() {
        this.head = this.tale = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        if (this.tale === undefined) {
            this.tale = this.head = node;
        }
        else{
        this.tale.next = node;
        this.tale = node;
        }
        this.length++;

    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }
        let node = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tale = this.head = undefined;
        }
        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}