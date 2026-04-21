export const fetchContentFromBard = async ({
    grade,
    subject,
    chapter,
    difficulty,
    action,
  }) => {
    try {
      // Replace with Bard API integration or mocked data
      const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY"; // Replace with actual Bard API URL
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grade,
          subject,
          chapter,
          difficulty,
          action,
        }),
      });
  
      const data = await response.json();
      return data.result || 'Content not available.';
    } catch (error) {
      console.error('Error fetching from Bard API:', error);
      return 'An error occurred. Please try again later.';
    }
  };
  