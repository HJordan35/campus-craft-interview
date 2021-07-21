export const updateProfileInformation = (data) => {
  const { firstName, lastName, avatarSrc } = data;
  const headerNode = document.querySelector("#profile-header .profile-header");
  const profileAvatarNode = headerNode.querySelector("img");
  const nameNode = headerNode.querySelector(".profile-info .profile-info-name");

  nameNode.classList.remove(
    "loading",
    "skeleton-block",
    "skeleton-block--half"
  );

  nameNode.innerHTML = `${firstName} ${lastName}`;
  profileAvatarNode.src = avatarSrc;
  profileAvatarNode.setAttribute("aria-label", `${firstName} ${lastName}`);

  if (!avatarSrc) {
    profileAvatarNode.remove();
  }
};
