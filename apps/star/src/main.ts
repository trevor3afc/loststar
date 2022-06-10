import { exeInitial } from './app/controllers/initial';

console.log('Hello World!');

(() => {
  console.log({
    debug: 'env',
    FLUENTFFMPEG_COV: process.env.FLUENTFFMPEG_COV,
  });
  exeInitial();
})();
