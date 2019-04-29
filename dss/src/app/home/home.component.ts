import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { TNSPlayer } from 'nativescript-audio-player';
import { ShareFile } from 'nativescript-share-file';
import { Folder, path, knownFolders } from "tns-core-modules/file-system";

// ~ = app directory
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private _player: TNSPlayer;
    shareFile: ShareFile;
    //to do
    // gavlan
    // OCELOTTEEEE
    // death sound
    // STICKERS

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
    diags = [

        {
            name: "Grossly Incandescent",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/grossly.mp3'
        },
        {
            name: "Jolly Cooperation",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/jolly.mp3'
        },
        {
            name: "Begone with you",
            image: 'assets/imgs/vamos.png',
            url: 'assets/mp3/begone.mp3'
        },
        {
            name: "You spoil my focus",
            image: 'assets/imgs/vamos.png',
            url: 'assets/mp3/focus.mp3'
        },
        {
            name: "A lie",
            image: 'assets/imgs/aldia.png',
            url: 'assets/mp3/lie.mp3'
        },
        {
            name: "Conniptions",
            image: 'assets/imgs/conniptions.png',
            url: 'assets/mp3/conniptions.mp3'
        },
        {
            name: "Touch the darkness",
            image: 'assets/imgs/firekeeper.png',
            url: 'assets/mp3/darkness.mp3'
        },
        {
            name: "It's a complete idiot",
            image: 'assets/imgs/patches.png',
            url: 'assets/mp3/patch_idiot.mp3'
        },
        {
            name: "Laughs",
            image: 'assets/imgs/patches.png',
            url: 'assets/mp3/patch_laugh.mp3'
        },
        {
            name: "He is completely mad",
            image: 'assets/imgs/patches.png',
            url: 'assets/mp3/patch_mad.mp3'
        },
        {
            name: "You've come at the perfect time",
            image: 'assets/imgs/patches.png',
            url: 'assets/mp3/patch_perfect.mp3'
        },
        {
            name: "Welcome to Trusty Patches' Trove of Treasures.",
            image: 'assets/imgs/patches.png',
            url: 'assets/mp3/patch_shop.mp3'
        },
        {
            name: "Hmmm...",
            image: 'assets/imgs/sieg.png',
            url: 'assets/mp3/sieg_hmm.mp3'
        },
        {
            name: "Hmmmmm...",
            image: 'assets/imgs/sieg.png',
            url: 'assets/mp3/sieg_hmm2.mp3'
        },

        {
            name: "Give me soft",
            image: 'assets/imgs/nest.png',
            url: 'assets/mp3/snuggly_soft.mp3'
        },
        {
            name: "Give me warm",
            image: 'assets/imgs/nest.png',
            url: 'assets/mp3/snuggly_warm.mp3'
        },
        {
            name: "I hardly think so",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/sol_hardly.mp3'
        },
        {
            name: "Hello there",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/sol_hellothere.mp3'
        },
        {
            name: "Hurrah",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/sol_hurrah.mp3'
        },
        {
            name: "Laugh",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/sol_laugh.mp3'
        },
        {
            name: "My sun",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/sol_mysun.mp3'
        },
        {
            name: "I have a proposition",
            image: 'assets/imgs/solaire.png',
            url: 'assets/mp3/sol_propo.mp3'
        },
        {
            name: "So what did that giant mushroom make you do",
            image: 'assets/imgs/chester.png',
            url: 'assets/mp3/chester_mush.mp3'
        },
        {
            name: "Oh, you again",
            image: 'assets/imgs/chester.png',
            url: 'assets/mp3/chester_youagain.mp3'
        },
        {
            name: "Very well",
            image: 'assets/imgs/frampt.png',
            url: 'assets/mp3/frampt_share.mp3'
        },
        {
            name: "This I can provide you",
            image: 'assets/imgs/frampt.png',
            url: 'assets/mp3/frampt_provide.mp3'
        },
        {
            name: "Zzzzz....",
            image: 'assets/imgs/frampt.png',
            url: 'assets/mp3/frampt_sleep.mp3'
        },
        {
            name: "I was wrong",
            image: 'assets/imgs/frampt.png',
            url: 'assets/mp3/frampt_wrong.mp3'
        },
    ];
    others = [
        {
            name: "Vordt's Screeching",
            image: 'assets/imgs/vordt.png',
            url: 'assets/mp3/vordt.mp3'
        },
        {
            name: "Game Start",
            image: 'assets/imgs/dslogo.png',
            url: 'assets/mp3/gamestart.mp3'
        },
        {
            name: "Bark!",
            image: 'assets/imgs/doggo.png',
            url: 'assets/mp3/dog_bark.mp3'
        },
        {
            name: "Attack",
            image: 'assets/imgs/doggo.png',
            url: 'assets/mp3/dog_att.mp3'
        },
        {
            name: "You Died",
            image: 'assets/imgs/youdied.png',
            url: 'assets/mp3/youdied.mp3'
        },
        {
            name: "Thank You Dark Souls",
            image: 'assets/imgs/youdied.png',
            url: 'assets/mp3/thds.mp3'
        },

        {
            name: "Death",
            image: 'assets/imgs/mimic.png',
            url: 'assets/mp3/mimic_death.mp3'
        },
        {
            name: "Laugh",
            image: 'assets/imgs/mimic.png',
            url: 'assets/mp3/mimic_laugh.mp3'
        },
        {
            name: "Victory Achieved",
            image: 'assets/imgs/va.png',
            url: 'assets/mp3/va.mp3'
        },
        {
            name: "Bonfire",
            image: 'assets/imgs/fire.png',
            url: 'assets/mp3/fire.mp3'
        },
        {
            name: "New Area",
            image: 'assets/imgs/newarea.png',
            url: 'assets/mp3/newarea.mp3'
        },
        {
            name: "Parry",
            image: 'assets/imgs/parry.png',
            url: 'assets/mp3/parry.mp3'
        },
        {
            name: "Backstab",
            image: 'assets/imgs/backstab.png',
            url: 'assets/mp3/backstab.mp3'
        },
        {
            name: "Red Eye Orb",
            image: 'assets/imgs/invade.png',
            url: 'assets/mp3/invade.mp3'
        },
        {
            name: "Summon",
            image: 'assets/imgs/summon.png',
            url: 'assets/mp3/summon.mp3'
        },

    ];
    gestures = [
        {
            name: 'Point Forward',
            src: 'assets/gifs/pointf.gif'
        },
        {
            name: 'Point Down',
            src: 'assets/gifs/pointd.gif'
        },
        {
            name: 'Praise the Sun!',
            src: 'assets/gifs/praise.gif'
        },
        {
            name: 'My Thanks!',
            src: 'assets/gifs/mythanks.gif'
        },
        {
            name: 'Wave',
            src: 'assets/gifs/wave.gif'
        },
        {
            name: 'Welcome',
            src: 'assets/gifs/welcome.gif'
        },
        {
            name: 'Dignified bow',
            src: 'assets/gifs/digbow.gif'
        },
        {
            name: 'Joy',
            src: 'assets/gifs/joy.gif'
        },
        {
            name: 'Applause',
            src: 'assets/gifs/applause.gif',
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

    public onPress(path:string) {
        console.log('Pressed on ' + path);
        this.shareFile = new ShareFile();
        const folder: Folder = <Folder>knownFolders.currentApp();
        const folderPath: string = folder.path;
        let file = folderPath + '/' + path
        console.log(folder);
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
