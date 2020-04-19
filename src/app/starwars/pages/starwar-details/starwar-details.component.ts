import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-starwar-details',
  templateUrl: './starwar-details.component.html',
  styleUrls: ['./starwar-details.component.scss']
})
export class StarwarDetailsComponent implements OnInit {
  starwarId: any;
  detailData: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _starWarsService : StarwarsService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => this.starwarId = params.id);
    let args = {
      id: this.starwarId
    };
    
    this.getDetailData(args);
  }

  getDetailData(args) {
    this._starWarsService.getstarWarDetail(args).subscribe((data)=> {
      console.log("data",data);
     this.detailData = data;
    });
  }


}
