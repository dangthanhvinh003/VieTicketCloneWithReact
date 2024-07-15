const BASE_URL = 'http://localhost:8080';

export const addEvent = async (event) => {
  const response = await fetch(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
  });
  return await response.json();
}

export const fetchEvents = async () => {
  try {
    const response = await fetch(`${BASE_URL}/events`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};