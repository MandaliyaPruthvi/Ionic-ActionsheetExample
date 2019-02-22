import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ionicActionSheet: any;
  racer: any;
  show: boolean = false;
  constructor(
    public navCtrl: NavController,
    private asCtrl: ActionSheetController) {}

  presentActionSheet(){
    this.show = false;
    this.racer = "";
    const actionsheet = this.asCtrl.create({
      enableBackdropDismiss: false , 
      title: 'Action Sheet Example',
      cssClass: 'actionsheet',
      buttons: [
        {
          text: 'Lewis Hamilton',
          handler: () => {
            console.log("Lewis Hamilton Clicked...");
            // alert("Lewis Hamilton Selected");
            this.show = true;
            this.racer = "Lewis Hamilton";
          }
        },
        {
          text: 'Sabestian Vettal',
          handler: () => {
            console.log("Sabestian Vettal Clicked...");
            // alert("Sabestian Vettal Selected");
            this.show = true;
            this.racer = "Sabestian Vettal";
          } 
        },
        {
          text: 'Kimi Rikkonen',
          handler: () => {
            console.log("Kimi Rikkonen Clicked...");
            // alert("Kimi Rikkonen Selected");
            this.show = true;
            this.racer = "Kimi Rikkonen";
          } 
        },
        {
          text: 'Max Verstappen',
          handler: () => {
            console.log("Max Verstappen Clicked...");
            // alert("Max Verstappen Selected");
            this.show = true;
            this.racer = "Max Verstappen";
          } 
        },
        {
          text: 'Valtteri Bottas',
          handler: () => {
            console.log("Valtteri Bottas Clicked...");
            // alert("Valtteri Bottas Selected");
            this.show = true;
            this.racer = "Valtteri Bottas";
          } 
        },
        {
          text: 'Cancel',
          cssClass: 'cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancel Clicked...");
          }
        }
        
      ]
    });
    actionsheet.present();
  }
  }

