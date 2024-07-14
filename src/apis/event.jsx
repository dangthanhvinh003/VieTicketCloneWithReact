export const addEvent = async (event) => {
  const response = await fetch(`http://localhost:5000/events`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
  });
}