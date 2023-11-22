import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PokeApiService } from './poke-api.service';
import { SortPokemonByNamePipe } from './sort-pokemon-by-name.pipe';
import { SortPokemonByIdPipe } from './sort-pokemon-by-id.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PokeSearchComponent,
        FilterPokemonPipePipe,
        SortPokemonByNamePipe,
        SortPokemonByIdPipe
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule
    ],
    providers: [
        // PokeApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
