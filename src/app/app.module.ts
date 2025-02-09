import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SeparatorComponent } from '../components/ui/separator/separator.component';
import { VideoInputFormComponent } from '../components/video-input-form/video-input-form.component';
import { PromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { SelectComponent } from '../components/ui/select/select.component';
import { SliderComponent } from '../components/ui/slider/slider.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeparatorComponent,
    VideoInputFormComponent,
    PromptSelectComponent,
    SelectComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule {}
