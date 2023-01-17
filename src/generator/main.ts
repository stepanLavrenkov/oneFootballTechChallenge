import downloadSchema from './src/download';
import Generator from './src/generator';

async function main() {
  await downloadSchema();

  const generator = await Generator.initialize();

  generator.generate();
}

main();
