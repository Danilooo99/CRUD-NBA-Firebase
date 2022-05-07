import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;

  constructor(public afAuth: AngularFireAuth, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('iniciado');
  }

  logout(): void {
    this.afAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  } 

}
