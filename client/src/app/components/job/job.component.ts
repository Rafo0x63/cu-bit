import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-job',
  imports: [EditorModule, FormsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  public editorConfig = {
    height: 1000,
    menubar: true,
    plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | blocks | bold italic backcolor | ' +
    'alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | removeformat | help'
  };

  public tinymceScriptSrc = 'https://cdn.tiny.cloud/1/mnnxhexfndbt2fdpqldbsrudawk0dhe7coccn2ujixmudkct/tinymce/6/tinymce.min.js';

  public title: string = '';
  public description: string = '';

  handleEditorChange(content: string) {
    this.description = content;
  }

  saveContent() {
    const data = {
      title: this.title,
      description: this.description
    };

    fetch('http://localhost:5000/careers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => alert("Oglas spremljen u bazu"))
    .catch(err => console.error('Error: ', err))
  }
}
