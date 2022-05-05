import { Injectable } from '@angular/core';

// Para trabajar con FireStrore
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Model
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private angularFirestore: AngularFirestore) { }

  // Obtener todos los jugadores
  getPlayers(){
    return this.angularFirestore
      .collection("players")
      .snapshotChanges()
  }

  // obtener los jugadores por id
  getPlayersById(id){
    return this.angularFirestore
    .collection("players")
    .doc(id)
    .valueChanges()
  }

  // Crear un nuevo jugador
  createPlayer(player: Player){
    return new Promise<any> ( ( resolve, reject ) => {
      this.angularFirestore
      .collection("players")
      .add(player)
      .then( (response) => {
        console.log(response);
      },
      (error) => {
        reject(error)
      });
    });
  }

  // Editar un jugador
  updatePlayer(player: Player, id){
    return this.angularFirestore
    .collection("players")
    .doc(id)
    .update({
      name: player.name,
      surname: player.surname,
      age: player.age,
      team: player.team,
      position: player.position,
      value: player.value,
    });
  }

  // Eliminar un jugador
  deletePlayer(player){
    return this.angularFirestore
    .collection("players")
    .doc(player.id)
    .delete();
  }
}
