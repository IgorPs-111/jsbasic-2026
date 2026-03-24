function makeFriendsList(friends) {
  const friendList = document.createElement('ul');

  for (const friend of friends) {
    const friendItem = document.createElement('li');

    friendItem.textContent = `${friend.firstName} ${friend.lastName}`;

    friendList.appendChild(friendItem);
  }

  return friendList;
}
