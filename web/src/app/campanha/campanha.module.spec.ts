import { CampanhaModule } from './campanha.module';

describe('CampanhaModule', () => {
  let campanhaModule: CampanhaModule;

  beforeEach(() => {
    campanhaModule = new CampanhaModule();
  });

  it('should create an instance', () => {
    expect(campanhaModule).toBeTruthy();
  });
});
