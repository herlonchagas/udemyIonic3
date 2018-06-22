import { Component } from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import { Http } from "@angular/http";
import {Restaurante} from "../../domain/restaurante/restaurante";

@Component({
  selector: 'page-cardapios',
  templateUrl: 'cardapios.html'
})

export class CardapiosPage {

  public restaurante: Restaurante;
  constructor(
    public navCtrl: NavController,
    private _http: Http,
    public navParams: NavParams
  ){
    this.restaurante = this.navParams.get('RestauranteSelecionado');
    console.log(this.restaurante.nome);
  }

}
