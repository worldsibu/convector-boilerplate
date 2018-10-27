// tslint:disable:no-unused-expression

import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v1';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import 'mocha';

import { Test } from '../src/test.model';
import { TestControllerClient } from '../client';

describe('TestCtrl', () => {
  let adapter: MockControllerAdapter;
  let testCtrl: TestControllerClient;

  beforeEach(async () => {
    adapter = new MockControllerAdapter();
    testCtrl = new TestControllerClient(adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'TestController',
        name: join(__dirname, '..')
      }
    ]);
  });

  it('should create a new instance', async () => {
    const id = uuid();
    await testCtrl.create(new Test({
      id,
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    }));

    const result = await adapter.getById<Test>(id);

    expect(result).to.exist;
    expect(result.name).to.eq('Test');
  });
});
