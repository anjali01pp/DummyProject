import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  countries: string[] = [
    "Afghanistan",
    "Albania",
   
    "Zimbabwe"
  ];

  filteredCountries: string[] = [];
  filterText: string = '';

  filterCountries() {
    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().startsWith(this.filterText.toLowerCase())
    );
  }
}
