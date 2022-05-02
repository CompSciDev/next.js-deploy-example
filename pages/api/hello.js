export default function handler(req, res) {
  const secret = process.env.SUPER_SECRET_KEY;

  if (!secret) {
    return res
      .status(200)
      .json({ name: "Deployed, but the env variable is missing!" });
  }

  return res.status(200).json({ name: `Deployed! ${secret}` });
}
