import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DbComparisonService } from '../db-comparison.service';
import { Database } from '../model/database';

@Component({
  selector: 'app-db-comp-home',
  templateUrl: './db-comp-home.component.html',
  styleUrls: ['./db-comp-home.component.css']
})
export class DbCompHomeComponent implements OnInit {

  /* databases: string[
  databases: string[];
  tables: string[]; */
  columns = ["qwweer", "c2", "c3", "c1", "c4", "c5"];
  columns2 = ["qwweer", "c2", "c3", "c1"];
  tables = ["t1", "t2"];
  databases = ["d1", "d2"];
  selectedTable: string;
  selectedDB: string;
  selectedColumn: string = "c1";
  database1: Database = new Database();
  database2: Database = new Database();

  columnFormControl = new FormControl();

  constructor(private dbComparisonService: DbComparisonService) { }

  ngOnInit() {
  }

  appendSelectedColumns(column: string) {
    alert(column);
  }

  populateDatabases() {
    this.dbComparisonService.getDatabases(this.database1).subscribe(database => {
      this.databases = database;
    })
  }

  populateTables() {
    this.dbComparisonService.getTables(this.database1).subscribe(tables => {
      this.tables = tables;
    })
  }

  populateColumns() {
    if (this.selectedTable == 't5') {
      this.columns = ["c1", "c2"];
    } else {
      this.columns = ["c3", "c4"];
    }
  }

  printColumns() {
  }

  selectColumnInSecondDB() {
    // this.columns2 = this.columnFormControl.value;
    console.log(this.columnFormControl.value);
  }

  isSelectedInDB1(selectedColunm2: string) {
    if (this.columnFormControl.value != null) {
      return this.columnFormControl.value.includes(selectedColunm2);
      /* for (let selectedColumn of this.columnFormControl.value) {
        if (this.columns2.includes(selectedColumn)) {
          return true;
        } else {
          return false;
        }
      } */
    }

  }

}

