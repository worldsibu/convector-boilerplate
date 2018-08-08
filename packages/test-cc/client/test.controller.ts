import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Test } from '../src/test.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class TestControllerClient extends ConvectorController {
  private name = 'test';

  constructor(private adapter: ControllerAdapter) {
    super()
  }

  
  public async create(
    
    test: Test
  ) {
    await this.adapter.invoke(this.name, 'create', undefined, test);
  }
}
