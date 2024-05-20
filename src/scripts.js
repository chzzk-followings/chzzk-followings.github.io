document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get('https://124.80.212.31:3000/api'); // 로컬 서버의 프록시 경로로 요청

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const data = response.data;
    const followingList = data.content.followingList;

    const profilesContainer = document.querySelector(".profiles");

    followingList.forEach(({ channel }) => {
      const profileCard = document.createElement("div");
      profileCard.className = "profile-card";

      profileCard.innerHTML = `
        <img src="${channel.channelImageUrl}" alt="${channel.channelName}">
        <div class="profile-info">
          <h3>${channel.channelName}</h3>
          <div class="details">
            <span>Followed on ${new Date(channel.personalData.following.followDate).toLocaleDateString()}</span>
          </div>
        </div>
      `;

      profilesContainer.appendChild(profileCard);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
