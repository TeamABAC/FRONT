// pages/api/register.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userName, password, email } = req.body;

    try {
      const ngrokURL = 'https://23f4-210-218-52-13.ngrok-free.app/register'; // ngrok 백엔드 엔드포인트
      const response = await axios.post(ngrokURL, { userName, password, email });

      // ngrok 백엔드에서 성공 응답을 받으면 클라이언트에 전달
      return res.status(response.status).json(response.data);
    } catch (error) {
      if (error.response) {
        // ngrok 백엔드 에러 응답 전달
        return res.status(error.response.status).json({ message: error.response.data.message });
      }
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
