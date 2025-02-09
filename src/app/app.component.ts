import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SeparatorComponent } from '../components/ui/separator/separator.component';
import { VideoInputFormComponent } from '../components/video-input-form/video-input-form.component';
import { PromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { SelectComponent } from '../components/ui/select/select.component';
import { SliderComponent } from '../components/ui/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, SeparatorComponent, VideoInputFormComponent, 
    PromptSelectComponent, SelectComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  temperature: number = 0.5;
  videoId: string | null = null;
  
  onTemperatureChange(event: Event) {
    const inputValue = parseFloat((event.target as HTMLInputElement).value);
    this.temperature = inputValue;
  }

  setVideoId(event: { videoId: string }): void {
    const videoId = event.videoId; 
  }

  // const {
  //   input,
  //   setInput,
  //   handleInputChange,
  //   handleSubmit,
  //   completion,
  //   isLoading,
  // } = useCompletion({
  //   api: "https://upload-ai-server-vakr.onrender.com/ai/complete",
  //   body: {
  //     videoId,
  //     temperature,
  //   },
  //   headers: {
  //     "Content-type": "application/json",
  //   }
  // });


constructor(private apiService: ApiService) {}

handleSubmit(event: Event) {
  event.preventDefault();
  this.apiService.completeRequest(this.videoId, this.temperature).subscribe(response => {
  });
}
}
