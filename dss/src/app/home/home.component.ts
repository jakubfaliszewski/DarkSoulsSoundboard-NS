import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { TNSPlayer } from 'nativescript-audio-player';
import { ShareFile } from 'nativescript-share-file';
import { Folder, path, knownFolders } from "tns-core-modules/file-system";
import * as applicationModule from "tns-core-modules/application";

// ~ = app directory
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private _player: TNSPlayer;
    shareFile: ShareFile;

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
    ];
    constructor(private page: Page) {
        this._player = new TNSPlayer();
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
    }
    public onTap(sound) {
        console.log('~/' + sound);
        this._player
            .initFromFile({
                audioFile: '~/' + sound,
                loop: false,
                completeCallback: this._trackComplete.bind(this),
                errorCallback: this._trackError.bind(this)
            })
            .then(() => {
                this._player.getAudioTrackDuration().then(duration => {
                    console.log(`song duration:`, duration);
                    this._player.play();

                });
            });

    }

    public onPress(sound) {
        console.log('Pressed!');
        this.shareFile = new ShareFile();
        const folder: Folder = <Folder>knownFolders.currentApp();
        const folderPath: string = path.join(folder.path, "");
        let file = folderPath + '/' + sound
        console.log(file);

        this.shareFile.open(
            {
                path: file,
                intentTitle: "SHARE"
            });
    }

    private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);
    }

    private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}
