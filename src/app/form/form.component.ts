import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formularioDeContacto: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioDeContacto = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      mensaje: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }

alEnviarMensaje() {
 
  if (this.formularioDeContacto.valid == true) {

    window.open('https://wa.me/' + 2216047435 + '?text=Hola, mi nombre es '
    + this.formularioDeContacto.value.nombre +
    '. Me quiero contactar con vos por lo siguiente:'
    + this.formularioDeContacto.value.mensaje, '_blank');
}
}
}
