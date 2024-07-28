import { Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DinamicComponent } from './dinamic/dinamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2.6';

  @ViewChild('dinamicCompRef', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DinamicComponent>;

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DinamicComponent);
  }
  deleteComponent() {
    this.viewRef.clear();
  }
}
