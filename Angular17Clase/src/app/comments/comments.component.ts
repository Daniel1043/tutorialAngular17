import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      componente de comentarios
    </p>
    <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg">
    <p>
    En uno de sus trabajos, "Solving journalism’s hidden problem: Terrible analytics", Tom Rosenstiel afirma que la media fue inducida al error por el análisis sistemático convencional de datos – indicadores de medición de audiencia que normalmente miden las cosas equivocadas o ofrecen estadísticas ilusorias que exageran el número de lectores. Rosenstiel evalúa que los websites cuentan en exceso – más que el doble, quizás el triple – el verdadero número de lectores. </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
