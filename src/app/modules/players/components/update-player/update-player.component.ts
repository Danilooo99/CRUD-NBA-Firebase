import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  myEditForm: FormGroup;
  playerRef:any;

  positions = ["Pivot", "Alero", "Base", "Ala-Pivot", "Escolta"];
  teams = ["Boston Celtics","Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors",
           "Golden State Warriors", "LA Clippers", "LA Lakers", "Phoenix Suns", "Sacramento Kings",
           "Chicago Bulls","Cleveland Cavaliers","Detroit Pistons", "Indiana Pacers", "Milwauke Bucks",
           "Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards",
           "Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunders", "Portland Blazers",
           "Utah Jazz", "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orlean Pelicans",
           "San Antonio Spurs"];

  constructor(private playerService: PlayerService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) { 
    this.myEditForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      surname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      age: [null, [Validators.required]],
      team: [null, [Validators.required]],
      position: [null, [Validators.required]],
      value: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayersById(id).subscribe( res => {
      this.playerRef = res
      this.myEditForm = this.formBuilder.group({
        name: [this.playerRef.name, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        surname: [this.playerRef.surname, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        age: [this.playerRef.age, [Validators.required]],
        team: [this.playerRef.team, [Validators.required]],
        position: [this.playerRef.position, [Validators.required]],
        value: [this.playerRef.value, [Validators.required]],
      });
    });
  }

  submit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.playerService.updatePlayer(this.myEditForm.value, id);
    localStorage.setItem("edit",`Se han actalizado los datos del jugador ${this.myEditForm.value.name} ${this.myEditForm.value.surname} con éxito`);
    this.router.navigate( ['players/list'] ); 
  }

}
