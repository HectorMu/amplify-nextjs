export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ name: "From get method" });
  }

  if (req.method === "POST") {
    return res.status(200).json({ name: "Only POST" });
  }
}
