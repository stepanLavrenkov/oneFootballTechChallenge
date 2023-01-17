import fs from 'fs';
import { definitionType } from 'generator/types/types';
import schemaType from '../../../schema.json';

export default class Generator {
  private static schemaFileName = 'schema.json';
  private fileContent = '';
  private filePath = 'src/api/types/types.ts';

  constructor(private schema: typeof schemaType) {}

  static async initialize() {
    const schema = JSON.parse(fs.readFileSync(this.schemaFileName, 'utf8'));

    return new Generator(schema);
  }

  async generate() {
    this.fileContent += this.getDefaultData();

    this.generateDefinitions();
    this.wrinteFile();
  }

  private generateDefinitions() {
    for (const [key, def] of Object.entries(this.schema.definitions)) {
      const definition = def as any as definitionType;

      if (key != 'errorModel') {
        const modelName = `${key}Model`;
        let modelContent = `\nexport type ${modelName} = {`;

        for (const [name, property] of Object.entries(definition.properties)) {
          modelContent += `\n${name}${
            definition.required.includes(name) ? '' : '?'
          }: ${property.type};`;
        }

        modelContent += `\n}`;

        modelContent += `\nexport type ${modelName}Res = ${modelName} & responseFields;`;

        this.fileContent += modelContent;
      }
    }
  }

  private wrinteFile() {
    fs.writeFileSync(this.filePath, this.fileContent);
  }

  private getDefaultData() {
    const message = `/* *************************************************
    This file is generated automatically, do not update!
    ************************************************* */`;
    const defaultTypes = `\ntype responseFields = {
        id: number;
        createdAt: string;
        updatedAt: string;
      };
      
      export type getAllResponse<T> = {
        total: number;
        limit: number;
        skip: number;
        data: T;
      };
      export type errorModel = {
        name: string;
        message: string;
        code: number;
        className: string;
        errors: Record<string, any>;
      };`;

    return message + defaultTypes;
  }
}
