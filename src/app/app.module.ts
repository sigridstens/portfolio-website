import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./Resume/resume.component";
import {AnnualUpdateComponent} from "./portfolio/annualupdate/annualupdate.component";
import {FarkleComponent} from "./portfolio/farkle/farkle.component";
import {FizziologyComponent} from "./portfolio/Fizziology/fizziology.component";
import {ManifestoComponent} from "./portfolio/manifesto/manifesto.component";
import {PersonalBrandingComponent} from "./portfolio/personal branding/personalbranding.component";
import {SeatoSanComponent} from "./portfolio/SEA to SAN/seatosan.component";
import {ValentineComponent} from "./portfolio/Valentine/valentine.component";


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'portfolio/annualupdate',
    component: AnnualUpdateComponent
  },
  {
    path: 'portfolio/farkle',
    component: FarkleComponent
  },
  {
    path: 'portfolio/fizziology',
    component: FizziologyComponent
  },
  {
    path: 'portfolio/manifesto',
    component: ManifestoComponent
  },
  {
    path: 'portfolio/personalbranding',
    component: PersonalBrandingComponent
  },
  {
    path: 'portfolio/seatosan',
    component: SeatoSanComponent
  },
  {
    path: 'portfolio/valentine',
    component: ValentineComponent
  },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ResumeComponent,
    AnnualUpdateComponent,
    FarkleComponent,
    FizziologyComponent,
    ManifestoComponent,
    PersonalBrandingComponent,
    SeatoSanComponent,
    ValentineComponent

  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
