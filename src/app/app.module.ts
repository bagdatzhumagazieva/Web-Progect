import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportComponent } from './components/sport/sport.component';
import { SignComponent } from './components/sign/sign.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { MainComponent } from './components/main/main.component';

const appRoutes:Routes = [
  {path: '', component:MainComponent},
  {path: 'about', component:SignComponent},
  {path: 'electronics', component:ElectronicsComponent},
  {path: 'sport', component:SportComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    SignComponent,
    ElectronicsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
