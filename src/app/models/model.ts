import { TodoItem } from "./todoitem";

export class Model{
    user;
    items;
    constructor() {
       this.user="Aykut";
       this.items = [
          new TodoItem("Spor",false),
          new TodoItem("İş",false),
          new TodoItem("Ödev",true),
       ]
    }
}
