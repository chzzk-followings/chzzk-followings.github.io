await jsonp('//api.api.chzzk.naver.com/service/v1/channels/followings', null, (err, res) => {
  // .....
});

document.addEventListener("DOMContentLoaded", () => {
  const profiles = [
    {
      name: "Olivia Davis",
      avatar: "/placeholder-avatar.jpg",
      alt: "@shadcn",
      followDate: "June 15, 2023",
      subscriptions: 3,
    },
    {
      name: "Jared Palmer",
      avatar: "/placeholder-avatar.jpg",
      alt: "@jaredpalmer",
      followDate: "May 1, 2023",
      subscriptions: 1,
    },
    {
      name: "Colm Tuite",
      avatar: "/placeholder-avatar.jpg",
      alt: "@shadcn",
      followDate: "April 15, 2023",
      subscriptions: 2,
    },
    {
      name: "Max Leiter",
      avatar: "/placeholder-avatar.jpg",
      alt: "@maxleiter",
      followDate: "March 1, 2023",
      subscriptions: 3,
    },
    {
      name: "Shu Ding",
      avatar: "/placeholder-avatar.jpg",
      alt: "@shuding_",
      followDate: "February 1, 2023",
      subscriptions: 6,
    },
    {
      name: "Juan Pablo Zurita",
      avatar: "/placeholder-avatar.jpg",
      alt: "@juanpabloz",
      followDate: "January 1, 2023",
      subscriptions: 5,
    },
    {
      name: "Jane Doe",
      avatar: "/placeholder-avatar.jpg",
      alt: "@janedoe",
      followDate: "December 1, 2022",
      subscriptions: 0,
    },
  ];

  const profilesContainer = document.querySelector(".profiles");

  profiles.forEach(profile => {
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";
    
    profileCard.innerHTML = `
      <img src="${profile.avatar}" alt="${profile.alt}">
      <div class="profile-info">
        <h3>${profile.name}</h3>
        <div class="details">
          <span>Followed on ${profile.followDate}</span>
        </div>
        <div class="badges">
          <span class="badge ${profile.subscriptions > 0 ? 'green' : 'red'}">
            ${profile.subscriptions > 0 ? `Subscribed+${profile.subscriptions}` : 'No Subscribed'}
          </span>
        </div>
      </div>
    `;

    profilesContainer.appendChild(profileCard);
  });
});