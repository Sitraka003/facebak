//fetch 
fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(data => {
    const userListDiv = document.getElementById('user-list');
    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user-card';

      const userPhoto = document.createElement('img');
      userPhoto.src = user.photo;
      userPhoto.alt = `${user.username}'s photo`;
      userPhoto.className = 'user-photo';

      const userInfo = document.createElement('div');
      userInfo.className = 'user-info';
      userInfo.innerHTML = `
        <h2>${user.username}</h2>
        <p>Email: ${user.email}</p>
        <p>Bio: ${user.bio}</p>
        <p>Joined at: ${user.joinedAt}</p>
      `;

      userDiv.appendChild(userPhoto);
      userDiv.appendChild(userInfo);
      userListDiv.appendChild(userDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));