import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from '../../core/thoughts.service';

@Component({
  selector: 'app-thoughts-collection',
  templateUrl: './thoughts-collection.component.html',
  styleUrls: ['./thoughts-collection.component.scss']
})
export class ThoughtsCollectionComponent implements OnInit {

  thoughts$ = this.thoughtsSrv.getThoughtsList();

  constructor(
    private thoughtsSrv: ThoughtsService
  ) { }

  ngOnInit(): void {
  }

}
