import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DahsboardPageComponent implements OnInit {
  constructor(
    private db: AngularFirestore,
    public form: FormGroup,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public addProduct() {
    let body = {
      nomProduit: this.form.value.name,
      prixProduit: this.form.value.price,
    };
    this.db
      .collection('product')
      .add(body)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  ngOnDestroy() {}
}
