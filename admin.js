const messagesList = document.getElementById('messagesList');
const totalMessages = document.getElementById('totalMessages');
const emptyState = document.getElementById('emptyState');
const clearBtn = document.getElementById('clearBtn');

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('websiteMessages') || '[]');
    displayMessages(messages);
}

function displayMessages(messages) {
    totalMessages.textContent = messages.length;
    
    if (messages.length === 0) {
        messagesList.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    messagesList.innerHTML = messages
        .sort((a, b) => b.id - a.id)
        .map(message => `
            <div class="message-card" data-id="${message.id}">
                <div class="message-header">
                    <div class="message-info">
                        <div class="message-name">${escapeHtml(message.name)}</div>
                        <div class="message-email">${escapeHtml(message.email)}</div>
                    </div>
                    <div class="message-date">${message.date}</div>
                </div>
                <div class="message-content">${escapeHtml(message.content)}</div>
                <button class="delete-btn" onclick="deleteMessage(${message.id})">删除留言</button>
            </div>
        `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function deleteMessage(id) {
    if (confirm('确定要删除这条留言吗？')) {
        let messages = JSON.parse(localStorage.getItem('websiteMessages') || '[]');
        messages = messages.filter(m => m.id !== id);
        localStorage.setItem('websiteMessages', JSON.stringify(messages));
        loadMessages();
    }
}

clearBtn.addEventListener('click', () => {
    if (confirm('确定要清空所有留言吗？此操作不可恢复！')) {
        localStorage.removeItem('websiteMessages');
        loadMessages();
    }
});

loadMessages();
