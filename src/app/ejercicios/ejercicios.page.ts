import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
})
export class EjerciciosPage {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('ejercicios').valueChanges();
  }
}
