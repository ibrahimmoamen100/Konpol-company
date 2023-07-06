// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { datasheets, markets, materials, products, resources } from '../../app/data/Data';
export default function handler(req, res) {
  res.status(200).json([datasheets,markets,materials,products,resources]);
}
