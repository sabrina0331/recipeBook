import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorage: DataStorageService,
    private authServ: AuthService
  ) {}

  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
  onLogout() {
    this.authServ.logout();
  }
  ngOnInit() {
   this.userSub = this.authServ.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
      console.log(!!user);
   });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
