import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavigationComponent } from './core/components/navigation/navigation/navigation.component';
import { RootStoreModule } from './root-store/root-store.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HomeModule, RootStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
