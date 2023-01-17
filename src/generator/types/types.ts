export type definitionType = {
  title: string;
  $schema: string;
  type: string;
  required: string[];
  additionalProperties: boolean;
  properties: Record<string, { type: string }>;
};
