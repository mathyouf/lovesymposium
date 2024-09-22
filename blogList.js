fetch('blogs.csv')
.then(response => response.text())
.then(data => {
  const rows = data.split('\n').slice(1); // Skip header row
  const attendeesList = document.getElementById('blog-list');
  rows.forEach(row => {
    const [name, link, attending] = row.split(',');
    const attendeeDiv = document.createElement('div');
    attendeeDiv.classList.add('blog-name');
    attendeeDiv.classList.add(attending.trim() === 'true' ? 'attending' : 'not');
    const attendeeLink = document.createElement('a');
    attendeeLink.href = link.trim();
    attendeeLink.textContent = name.trim();
    attendeeLink.target = "_blank"; // Open in a new tab
    attendeeDiv.appendChild(attendeeLink);
    attendeesList.appendChild(attendeeDiv);
        // if (row !== rows[rows.length - 1]) {
    //   const divider = document.createElement('span');
    //   divider.textContent = '~';
    //   divider.classList.add('divider');
    //   attendeeLink.insertAdjacentElement('afterend', divider);
    // }
  });
});