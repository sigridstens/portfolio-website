import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
  // {
  //   path: 'about',
  //   component: PostPageComponent
  // },
  // {
  //   path: 'contact',
  //   component: AboutComponent
  // },
  // {
  //   path: 'portfolio',
  //   component: CalendarComponent
  // }
  ];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
