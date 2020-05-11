import findBy from '../app';
import commonBase from '../common_base';

test('Должен найтись текст', () => {
  const finder = findBy('name', 'урон');
  const results = commonBase.filter(finder);

  expect(results).toEqual([{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }]);
});
