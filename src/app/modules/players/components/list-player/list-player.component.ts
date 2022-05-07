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
export class ListPlayerComponent implements OnInit, AfterViewInit {

  dataSend: string = "Añadir nuevo jugador"; 
  Players!: Player[];

  displayedColumns: string[] = ['name', 'surname', 'age', 'team', 'position', 'value', 'action'];
 
  dataSource = new MatTableDataSource<Player>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private playerService: PlayerService) {} 

  ngOnInit(): void {
      this.playerService.getPlayers().subscribe( (res) => {
          this.Players = res.map( (e) => {
            return {
              id: e.payload.doc.id,
              ...(e.payload.doc.data() as Player)
            }
          });
      });
    
      this.playerService.getPlayers().subscribe( (res) => {
        this.paginatorData(this.Players);
      }); 

      this.messageAddPlayer();
      this.messageUpdatePlayer()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteRow (player){
    const confirm = document.getElementById('confirm');
    const error = document.getElementById("error");
    const edit = document.getElementById('edit');
    this.playerService.deletePlayer(player);
    error.innerHTML = `<div style='background-color:white;width:90%;margin:auto;'>Se ha eliminado con éxito al jugador ${player.name} ${player.surname}</div>`;
    confirm.innerHTML="";
    edit.innerHTML="";
  } 

  paginatorData(Players){
    this.dataSource = new MatTableDataSource(Players);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  messageAddPlayer(){
    if(localStorage.getItem("confirm")!==null){
      const error = document.getElementById("error");
      const confirm = document.getElementById('confirm');
      const edit = document.getElementById('edit');
      confirm.innerHTML = `<div style='background-color:white;width:90%;margin:auto;'>${localStorage.getItem("confirm")}</div>`;
      localStorage.removeItem('confirm');
      error.innerHTML="";
      edit.innerHTML="";
    }
  }

  messageUpdatePlayer(){
    if(localStorage.getItem("edit")!==null){
      const error = document.getElementById("error");
      const confirm = document.getElementById('confirm');
      const edit = document.getElementById('edit');
      edit.innerHTML = `<div style='background-color:white;width:90%;margin:auto;'>${localStorage.getItem("edit")}</div>`;
      localStorage.removeItem('edit');
      error.innerHTML="";
      confirm.innerHTML="";
    }
  }
}
