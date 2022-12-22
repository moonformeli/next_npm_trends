import { validate as validateClass } from 'class-validator';

export type DtoClass<T extends Record<string, any>> = { new (): T };
export const validate = async <T>(
  Dto: DtoClass<T>,
  data: Record<string, any>,
) => {
  const instance = new Dto();

  Object.entries(data).forEach((entry) => {
    instance[entry[0]] = entry[1];
  });

  const res = await validateClass(instance as object);

  return res.map((r) => r.toString());
};
