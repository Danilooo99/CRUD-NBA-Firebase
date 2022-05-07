import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  myForm: FormGroup;
  positions = ["Pivot", "Alero", "Base", "Ala-Pivot", "Escolta"];
  teams = ["Boston Celtics","Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors",
           "Golden State Warriors", "LA Clippers", "LA Lakers", "Phoenix Suns", "Sacramento Kings",
           "Chicago Bulls","Cleveland Cavaliers","Detroit Pistons", "Indiana Pacers", "Milwauke Bucks",
           "Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards",
           "Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunders", "Portland Blazers",
           "Utah Jazz", "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orlean Pelicans",
           "San Antonio Spurs"];

  constructor(private playerService: PlayerService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      surname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      age: [null, [Validators.required]],
      team: [null, [Validators.required]],
      position: [null, [Validators.required]],
      value: [null, [Validators.required]],
    });
  }

  submit() {
    this.playerService.createPlayer(this.myForm.value);
    localStorage.setItem("confirm",`Se ha añadido al jugador ${this.myForm.value.name} ${this.myForm.value.surname} con éxito`);
    this.router.navigate( ['players/list'] );
  }
}
