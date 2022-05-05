import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit/*, AfterViewInit*/ {

  dataSend: string = "Añadir nuevo jugador"; 
  Players: Player[];

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //dataSource: MatTableDataSource<Player>;
  
  constructor(private playerService: PlayerService) {
   }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe( (res) => {
      this.Players = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Player)
        }
      });
    }); 
  }

  /*ngAfterViewInit() {
    console.log("Bro",this.dataSource);
    this.dataSource.paginator = this.paginator;
  }*/

  deleteRow (player){
    const error = document.getElementById("error");
    this.playerService.deletePlayer(player);
    error.innerHTML = `<p>Se ha eliminado con éxito al jugador ${player.name} ${player.surname}</p>`;
  } 

  /*loadPlayersPaginator(){
    this.playerService.getPlayers().subscribe( (res) => {
      this.Players = res.map( (e) => {
        this.dataSource = new MatTableDataSource(this.Players); 
        this.dataSource.paginator = this.paginator;
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Player)
        }
      });
    });  
  }*/

  displayedColumns: string[] = ['name', 'surname', 'age', 'team', 'position', 'value', 'action'];

}
