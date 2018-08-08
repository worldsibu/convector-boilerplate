import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Test } from './test.model';

@Controller('test')
export class TestController extends ConvectorController {
  @Invokable()
  public async create(
    @Param(Test)
    test: Test
  ) {
    await test.save();
  }
}
