import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiAuthClientService } from 'src/app/services/apiAuth/api-auth-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user!: User;


  constructor(
    public apiAuthClientService: ApiAuthClientService,
    private router: Router
  ){
    this.apiAuthClientService.us.subscribe(res => {
      this.user = res;
    });
  }
  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(){
    this.apiAuthClientService.logout();
    this.router.navigate(['/login']);
  }


}
