document.addEventListener('DOMContentLoaded', () => {
    
    const eventForm = document.getElementById('eventForm');
    const eventsContainer = document.getElementById('eventsContainer');
    const clearBtn = document.getElementById('clearEventsBtn');
    const addSampleBtn = document.getElementById('addSampleBtn');
    const lastKeyDisplay = document.getElementById('lastKeyDisplay');

    function createEventCard(title, date, category, desc) {
        const div = document.createElement('div');
        div.classList.add('event-card');
        
        div.innerHTML = `
            <div class="card-title">${title}</div>
            <div class="card-date">📅 ${date}</div>
            <span class="category-badge">${category}</span>
            <p class="card-desc">${desc}</p>
            <button class="delete-btn" title="Delete Event">✖</button>
        `;
        return div;
    }

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('eventTitle').value;
        const date = document.getElementById('eventDate').value;
        const category = document.getElementById('eventCategory').value;
        const desc = document.getElementById('eventDesc').value;

        const eventCard = createEventCard(title, date, category, desc);
        
        const emptyMsg = eventsContainer.querySelector('.empty-msg');
        if (emptyMsg) {
            emptyMsg.remove();
        }

        eventsContainer.appendChild(eventCard);

        eventForm.reset();
    });

    eventsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const card = e.target.closest('.event-card');
            if (card) {
                card.style.opacity = '0';
                setTimeout(() => card.remove(), 300);
                
                setTimeout(() => {
                    if (eventsContainer.children.length === 0) {
                        eventsContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
                    }
                }, 300);
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        if(confirm('Are you sure you want to clear all events?')) {
            eventsContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
        }
    });

    addSampleBtn.addEventListener('click', () => {
        const samples = [
            { title: 'Tech Talk 2024', date: '2024-12-15', cat: 'Conference', desc: 'A deep dive into AI trends.' },
            { title: 'JS Workshop', date: '2024-11-20', cat: 'Workshop', desc: 'Learning DOM manipulation fundamentals.' }
        ];

        const emptyMsg = eventsContainer.querySelector('.empty-msg');
        if (emptyMsg) emptyMsg.remove();

        samples.forEach(sample => {
            const card = createEventCard(sample.title, sample.date, sample.cat, sample.desc);
            eventsContainer.appendChild(card);
        });
    });

    function runDemo() {
        const sourceElement = document.getElementById('sourceElement');
        
        document.getElementById('demoInnerHTML').innerText = sourceElement.innerHTML; 
        
        document.getElementById('demoInnerText').innerText = sourceElement.innerText;

        document.getElementById('demoTextContent').innerText = sourceElement.textContent;
    }

    runDemo();

    document.addEventListener('keydown', (e) => {
        const pressedKey = e.key === " " ? "Space" : e.key;

        lastKeyDisplay.textContent = pressedKey;
    });
});