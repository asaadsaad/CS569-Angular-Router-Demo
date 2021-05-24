import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-query',
  template: `
    <p>
      Query Parameter ID: {{id}}
    </p>
  `
})
export class QueryComponent {

  private subscription: Subscription;
  id: string;


  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParamMap
      .subscribe(
        ({params}: any) => this.id = params['id']
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
