import { query } from "@/services/generator";

export async function generator(data) {
  const promises = data.map(async (input) => {
    return query({ inputs: input });
  });

  const results = await Promise.all(promises);
  return results;
}
