class ChatRoom {
  constructor() {
    this.open = document.getElementById('chat-send');
    this.eventInit();
  }

  eventInit() {
    this.url = 'http://127.0.0.1:4500/mhmm/chatroom.html';
    this.openName = 'ChatRoom';

    this.open.addEventListener('click', e => {
      let url = this.url;
      let name = this.openName;

      window.open(url, '', 'width=100, hegiht=300, location : no', false);
    });
  }
}

new ChatRoom();
