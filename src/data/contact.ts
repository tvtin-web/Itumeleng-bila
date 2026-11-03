export const email = 'bilaitumeleng32@gmail.com';
export const phoneDisplay = '+27 62 443 5414';
const whatsappNumber = '27624435414';

export const mailto = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const whatsapp = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
