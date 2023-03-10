import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
