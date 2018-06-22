import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Usuario } from "../../domain/usuario/usuario";
import { MinhaContaPage } from "../minha-conta/minha-conta";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  //url: 'http://marmita.idsgeo.com/index.php/page/login_ionic'

public data;
public http;
public usuario: Usuario;
public usuariLogado: Usuario;

  constructor(public navCtrl: NavController, http: Http) {
    this.data = {};
    this.data.response = '';
    this.http = http;
    this.usuario = new Usuario(null, null, null, null);
  }


  submit() {


    var link = 'http://marmita.idsgeo.com/index.php/page/login_ionic';
    var data = JSON.stringify({ email: this.usuario.email, password: this.usuario.password })

    this.http.post(link, data)
      .subscribe( data => {
        this.data.response = data._body;
        var res = this.data.response.split("|");
        if(res[1] == "sucesso"){
          //this.usuariLogado.email = this.usuario.email;
          //this.usuariLogado.status = "autenticado";
          this.navCtrl.push(MinhaContaPage);
        }else
        if( this.data.response == "invalido"){
          console.log("login ou senha inálido");
        }
      },error => {
        console.log("Ocorreu algum erro");
      })
  }

}
