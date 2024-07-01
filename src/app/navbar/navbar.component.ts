import { Component, Input } from "@angular/core";
@Component({
    selector : 'app-navbar',
    standalone : true,
   
    templateUrl : './navbar.component.html',
    styleUrl : './navbar.component.css'

})
export class AppNavBarComponent {

    @Input() fromParent : string = "";
    childMSG : string = "From child component";

    


}