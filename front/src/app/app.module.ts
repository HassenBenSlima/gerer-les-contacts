import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from './about/about.component';
import {HttpModule} from "@angular/http";
import {ContactsService} from "../service/contacts.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewContactComponent} from './new-contact/new-contact.component';
import {NouveauContactComponent} from './nouveau-contact/nouveau-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'new-contact',component:NewContactComponent},
  {path:'editContact/:id',component:EditContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}

];
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ContactsService, { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
