const BASE_URL = 'http://localhost:8080';

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