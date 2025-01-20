import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  temperature: number = 0.5;
  videoId: string | null = null;

  setTemperature(value: number): void {
    this.temperature = value;
  }

  setVideoId(id: string | null): void {
    this.videoId = id;
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
