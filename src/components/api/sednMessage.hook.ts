interface SendMessageProps {
    text: string;
    chatId: string;
    token: string;
    parse_mode?: 'MarkdownV2' | 'HTML';
}

export async function sendMessage({ text, chatId, token, parse_mode }: SendMessageProps) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = { chat_id: chatId, text, parse_mode };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.ok) {
        throw new Error(`Failed to send message: ${data.description}`);
    }

    return data.result;
}
