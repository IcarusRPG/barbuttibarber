import { get, post } from '../api.js';
export const ConversationsService = { list: () => get('/conversations'), sendMessage: (p) => post('/conversations/message', p) };
