import Logger from '../src/lib/logger/logger';

describe('Logger', () => {
  test('initialize', () => {
    Logger.setup('off');
    Logger.logger('initialize').info('initizlied logger');
  });
});
