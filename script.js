class CanvasPaint{
    constructor(data){
        this.name = "Saksham";
        this.age = 20;
        this.data = data;
}

printDetails(){
    console.log(this.age, this.name, this.data);
}
}

let canvas = new CanvasPaint(12);
canvas.printDetails();