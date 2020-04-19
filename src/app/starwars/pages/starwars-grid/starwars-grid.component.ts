import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { StarwarsService } from '../../services/starwars.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starwars-grid',
  templateUrl: './starwars-grid.component.html',
  styleUrls: ['./starwars-grid.component.scss']
})
export class StarwarsGridComponent implements OnInit {

  starWarsData = [];
  resultsLength;
  displayedColumns = ['name','height','mass','hair_color','birth_year','gender'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoadingResults: boolean;

  constructor(
    private _starWarsService: StarwarsService,
    private router: Router
  ) { }

  ngOnInit() {
   this.getStarWars({});
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.paginator.page.subscribe((p)=> {
      this.getStarWars({page: p.pageIndex + 1 });
    })
  }


  getStarWars(args) {
    this._starWarsService.getStarWarsList(args).subscribe((data)=> {
      console.log("data",data);
      this.starWarsData = data.results;
      this.resultsLength = data.count;
    });
  }

  onRowClicked(row) {
    console.log("roww cicke",row);
    let arr = row.url.split('/');
    let id = arr[arr.length-2]
    console.log(id);
    this.router.navigate(['starwars/details/' + id])
  }

}
