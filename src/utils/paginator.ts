import { Model, SortOrder } from "mongoose";
import { connectAndQuery } from "./utilities";

async function getCount(model: Model<any>) {
  return connectAndQuery(async () => await model.countDocuments());
}

async function getDatas({
  model,
  limit,
  sort,
  skip,
}: {
  model: Model<any>;
  limit: number;
  sort?:
    | string
    | { [key: string]: SortOrder | { $meta: any } }
    | [string, SortOrder][];
  skip: number;
}) {
  return connectAndQuery(
    async () => await model.find().skip(skip).limit(limit).sort(sort),
  );
}

export function validatePage(page: number, maxPage: number) {
  return page <= maxPage && page > 0 ? page : 1;
}

export async function getPaginatedResult({
  model,
  sort,
  perPage,
  page,
}: {
  model: Model<any>;
  sort?:
    | string
    | { [key: string]: SortOrder | { $meta: any } }
    | [string, SortOrder][];
  perPage: number;
  page: number;
}) {
  const dataCount = await getCount(model);
  const maxPage = Math.ceil(dataCount / perPage);

  const skip = (page <= maxPage ? page - 1 : 0) * perPage;

  const datas = await getDatas({ model, limit: perPage, sort, skip });

  return { datas, maxPage };
}
