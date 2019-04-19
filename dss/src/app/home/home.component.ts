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
            url: 'assets/mp3/hello.mp3'
        },
        {
            name: "I'm sorry",
            image: 'assets/imgs/sorry.png',
            url: 'assets/mp3/sorry.mp3'
        },
        {
            name: "Thank you",
            image: 'assets/imgs/thyou.png',
            url: 'assets/mp3/thyou.mp3'
        },
        {
            name: "Help me",
            image: 'assets/imgs/helpme.png',
            url: 'assets/mp3/helpme.mp3'
        },
        {
            name: "Very good",
            image: 'assets/imgs/vg.png',
            url: 'assets/mp3/vg.mp3'
        }
    ]; constructor(private page: Page) {

    }
    public onItemTap(sound) {
        console.log('~/' + sound);
        

    }
    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}
