import { Component, OnInit } from '@angular/core';
import { Nomenclature, NomenclatureService } from 'src/app/service/nomenclature.service';

@Component({
  selector: 'app-nomenclature-list',
  templateUrl: './nomenclature-list.component.html',
  styleUrls: ['./nomenclature-list.component.css']
})
export class NomenclatureListComponent implements OnInit {
  public nomenclatureList: Nomenclature[] = [];

  constructor(public service: NomenclatureService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList);
  }

}
