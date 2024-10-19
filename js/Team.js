const leadershipData = [
    { name: "Person 1", title: "Title 1", image: 'Images/employee.jpg' },
    { name: "Person 2", title: "Title 2", image: 'Images/employee.jpg' },
    { name: "Person 3", title: "Title 3", image: 'Images/employee.jpg' },
    { name: "Person 4", title: "Title 4", image: 'Images/employee.jpg' },
    { name: "Person 5", title: "Title 5", image: 'Images/employee.jpg' },
    { name: "Person 6", title: "Title 6", image: 'Images/employee.jpg' },
    { name: "Person 7", title: "Title 7", image: 'Images/employee.jpg' },
    { name: "Person 8", title: "Title 8", image: 'Images/employee.jpg' },
    { name: "Person 9", title: "Title 9", image: 'Images/employee.jpg' },
    { name: "Person 10", title: "Title 10", image: 'Images/employee.jpg' },
    { name: "Person 9", title: "Title 9", image: 'Images/employee.jpg' },
    { name: "Person 10", title: "Title 10", image: 'Images/employee.jpg' },
];

const gridContainer = document.getElementById('leadershipGrid');

leadershipData.forEach(leader => {
    const leaderCard = document.createElement('div');
    leaderCard.className = 'leader-card';

    const leaderImageContainer = document.createElement('div');
    leaderImageContainer.className = 'leader-image-container';

    const leaderImage = document.createElement('img');
    leaderImage.src = leader.image;
    leaderImage.alt = leader.name;
    leaderImage.className = 'leader-image';

    const leaderHoverInfo = document.createElement('div');
    leaderHoverInfo.className = 'leader-hover-info';
    leaderHoverInfo.innerHTML = `<h3>${leader.name}</h3><p>${leader.title}</p>`;

    leaderImageContainer.appendChild(leaderImage);
    leaderImageContainer.appendChild(leaderHoverInfo);
    leaderCard.appendChild(leaderImageContainer);
    gridContainer.appendChild(leaderCard);
});
