import {Component, ViewEncapsulation} from '@angular/core';

import {BasicTablesService} from './content.service.ts';
import {BaCard} from '../../../../theme/components';
import {StripedTable} from './components/stripedTable';

@Component({
  selector: 'content-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, StripedTable],
  styles: [require('./basicTables.scss')],
  template: require('./contentTable.html'),
  providers: [BasicTablesService]
})
export class BasicTables {

  constructor() {
  }
}
