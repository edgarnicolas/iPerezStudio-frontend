function validateContactForm(data: typeof FormData): string | null {

    if(!data.name) return 'Name is required.';
    if(!data.email.includes('@')) return 'Please enter a valid email address.';
    if(!data.message.trim()) return 'Message cannot be empty.';

    return null;
}