import { NextApiRequest, NextApiResponse } from "next";

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  console.log("object", body);
  res.status(200).end();
};
