import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  template: `
            <!-- <h2 *ngIf="displayName; else elseBlock">Angular 9</h2>  

            <ng-template #elseBlock>
              <h2>
                Name is hidden
              </h2>
            </ng-template> -->

            <!-- <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
             
            <ng-template #thenBlock>
              <h2>The First Block</h2>
            </ng-template>

            <ng-template #elseBlock>
              <h2>The Second Block</h2>
            </ng-template> -->

            <!-- <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">You picked red color</div>
                <div *ngSwitchCase="'green'">You picked green color</div>
                <div *ngSwitchCase="'blue'">You picked blue color</div>
                <div *ngSwitchCase="'orange'">You picked orange color</div>
                <div *ngSwitchDefault>Pick Again</div>
            </div> -->

            <div *ngFor="let color of colors">
              <h2 [style.color]="color">{{color}}</h2>
            </div>
 `,
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  public colors = ["red", "blue", "green", "orange"]
  public color = "blue"
  displayName  = false;
  constructor() { }

  ngOnInit(): void {
  }

}
