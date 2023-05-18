class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    add(element){
        var node=new Node(element)
        if(!this.head){
            this.head=node
        }else{
            var current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }
    removeElement(element){
        var current=this.head
        var prev=null
        while(current){
            if(current.element===element){
              if(prev===null){
                this.head==current.next
              }else{
                prev.next=current.next
              }
              this.size--
              return true
            }
            prev=current
            current=current.next
        }
    }
    // here insert method starts
    insertAt(element,index){
        if(index>this.size || index<0 && this.size){
            return false
        }
        var node =new Node(element)
        var current=this.head
        var prev=null
        var i=0
        if(index===0){
            node.next=current
            this.head=node
        }else{
            while(i<index){
                prev=current
                current=current.next
                i++
            }
            prev.next=node
            prev=prev.next
            prev.next=current
            this.size++
        }
    }
    // next method starts
        printList(){
            var current=this.head
            var index=0
            while(current){
                console.log('element',current.element,"index :", index++)
                current=current.next
            }
        }
        // next method starts
        isEmpty(){
            return this.size===0?true:false
        }
        // size method starts
        sizeofLL(){
            return this.size
        }
}
var list =new LinkedList()
list.add(1)
list.add(2)
// list.insertAt(5,1)
// list .removeElement(5)
list.printList()
// console.log(list.sizeofLL())
console.log(list)
console.log(list.head)