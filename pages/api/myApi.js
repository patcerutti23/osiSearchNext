// pages/api/external-api.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=${req.body.terms}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
  }
}
