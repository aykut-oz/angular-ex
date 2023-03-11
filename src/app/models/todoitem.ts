export class TodoItem{
    description:string;
    action:boolean;

    constructor(_description: string,_action: boolean) {
       this.action=_action,
       this.description=_description;
    }
}
