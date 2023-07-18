import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'

import { LogoutComponent } from './logout/logout.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { ProfileComponent } from './profile/profile.component'
import { UserRoutingModule } from './user-routing.module'

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
]

@NgModule({
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
