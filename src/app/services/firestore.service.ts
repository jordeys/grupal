import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';

export interface Item {name: string; }
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
private itemsCollection: AngularFirestoreCollection<Item>;
items: Observable<Item[]>;
constructor(private afs: AngularFirestore){
  this.itemsCollection = afs.collection<Item>('items');
  this.items = this.itemsCollection.valueChanges(); 
}
restorna(){
  return this.items;
}
}
