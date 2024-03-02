import { Model, SortOrder } from "mongoose";
import { connectAndQuery } from "./utilityFunctions";

async function getCount(model: Model<unknown>) {
  return connectAndQuery(async () => await model.countDocuments());
}

async function getDatas(
  model: Model<unknown>,
  limit: number,
  sort?:
    | string
    | { [key: string]: SortOrder | { $meta: any } }
    | [string, SortOrder][]
    | null
    | undefined,
  skip = 0,
) {
  return connectAndQuery(async () => {
    const data = await model.find().skip(skip).limit(limit).sort(sort);

    return data;
  });
}

export async function getPaginatedResult(
  model: Model<unknown>,
  sort?:
    | string
    | { [key: string]: SortOrder | { $meta: any } }
    | [string, SortOrder][]
    | null
    | undefined,
  perPage = 5,
  page = 1,
) {
  const dataCount = await getCount(model);
  const maxPage = Math.ceil(dataCount / perPage);

  const skip = (page <= maxPage ? page - 1 : 0) * perPage;

  const datas = await getDatas(model, skip, sort, perPage);

  return { datas, maxPage };
}
