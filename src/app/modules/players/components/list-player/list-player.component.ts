import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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

      if(localStorage.getItem("confirm")!==null){
        const error = document.getElementById("error");
        const confirm = document.getElementById('confirm');
        confirm.innerHTML = `<p>${localStorage.getItem("confirm")}</p>`;
        localStorage.clear();
        error.innerHTML="";
      }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteRow (player){
    const confirm = document.getElementById('confirm');
    const error = document.getElementById("error");
    this.playerService.deletePlayer(player);
    error.innerHTML = `<p>Se ha eliminado con éxito al jugador ${player.name} ${player.surname}</p>`;
    confirm.innerHTML="";
  } 

  paginatorData(Players){
    this.dataSource = new MatTableDataSource(Players);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
