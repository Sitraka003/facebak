async function fetchPostData() {
    try {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
export { fetchPostData };
  