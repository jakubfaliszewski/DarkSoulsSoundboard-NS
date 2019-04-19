import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    carvings = [
        {
            name: 'Hello',
            image: 'assets/imgs/hello.png',
            onlineUrl: 'assets/mp3/hello.txt'
        },
        {
            name: "I'm sorry",
            image: 'assets/imgs/sorry.png',
            onlineUrl: 'assets/mp3/sorry.txt'
        },
        {
            name: "Thank you",
            image: 'assets/imgs/thyou.png',
            onlineUrl: 'assets/mp3/thyou.txt'
        },
        {
            name: "Help me",
            image: 'assets/imgs/helpme.png',
            onlineUrl: 'assets/mp3/helpme.txt'
        },
        {
            name: "Very good",
            image: 'assets/imgs/vg.png',
            onlineUrl: 'assets/mp3/vg.txt'
        }
    ]; constructor(private page: Page) {

    }
    public onItemTap(x) {
        console.log(x);
    }
    ngOnInit(): void {
        this.page.actionBarHidden = true;
        //this.page.backgroundImage = "res://mainbg";

    }
}
