class PrintBubbles{
constructor(parent, number){
    this.parent = parent;
    this.number = number;
}
 addBubble(){
for(var i = 1; i<= this.number; i++){
    bubbles.classList.add("bubble");
    bubbles.innerHTML = i;

let bubbles = new PrintBubbles(".app", 12 );
bubbles.addBubble();
