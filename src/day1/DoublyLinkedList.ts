type Node<T> ={
    value: T,
    next?: Node<T>,
    brev?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tale?: Node<T>;

    

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tale = undefined;
    }

    prepend(item: T): void {
        let node = {value: item} as Node<T>;
        if(this.head === undefined){
            this.head = node;
            this.tale = node;
        }
        else{
            this.head.brev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;

    }
    insertAt(item: T, idx: number): void {
        if(idx >= this.length || idx < 0){
            throw new Error("oh no!");
            
        }
        if (idx === 0) {
            this.prepend(item)
            return
        }
        let node = {value: item} as Node<T>;
        let target = this.head;
        for (let i = 0; target && i < idx; i++) {
            target = target.next;
        }
        node.brev = target?.brev;
        node.next = target;
        target = target?.brev;
        if (target) {
            target.next = node;
        }
        this.length++;

    }
    append(item: T): void {
        this.length++;
        let node = {value: item} as Node<T>;
        if (!this.tale) {
            this.head = this.tale = node;
            return
        }
        this.tale.next = node;
        node.brev = this.tale;
        this.tale = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head
        if (curr?.value === item) {
            this.head = this.head?.next;
            return
        }
            for (let i = 0; i < this.length; i++) {
                curr = curr?.next;
                if (curr?.value === item) {
                    if (curr?.brev) {
                        curr.brev.next = curr?.next;
                    }
                    if (curr?.next) {
                        curr.next.brev = curr.brev
                    }
                    this.length--;
                    return
                }
            }
    }

    get(idx: number): T | undefined {
        if (idx < 0 && idx >= this.length) {
            throw new Error("oh no!");
        }
        else if(idx === 0){
            return this.head?.value
        }
        else if (idx === this.length - 1) {
            return this.tale?.value
        }
        else{
            let curr = this.head
            for (let i = 0; i < idx; i++) {
                curr = curr?.next;
            }
            return curr?.value;
        }
    }
    removeAt(idx: number): T | undefined {
            if (idx < 0 && idx >= this.length) {
                throw new Error("oh no!");
            }
            else if(idx === 0){
                this.head = this.head?.next;
            }
            else if (idx === this.length - 1) {
                this.tale = this.tale?.brev;
            }
            else{
                let curr = this.head
                for (let i = 0; i < idx; i++) {
                    curr = curr?.next;
                }
                if (curr?.brev) {
                    curr.brev.next = curr?.next;
                }
                if (curr?.next) {
                    curr.next.brev = curr.brev
                }

            }
            this.length--;
            return
        }
}