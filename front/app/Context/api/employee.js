// /pages/api/employee.js
export default async function handler(req, res) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Employee`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Proxy error:', error);
      res.status(500).json({ error: 'Failed to fetch employee data' });
    }
  }