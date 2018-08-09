import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Test } from '../src/test.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class TestControllerClient extends ConvectorController {
  public name = 'test';

  constructor(public adapter: ControllerAdapter, public user?: string) {
    super()
  }

  
  public async create(
    
    test: Test
  ) {
    await this.adapter.invoke(this.name, 'create', this.user, test);
  }
}
