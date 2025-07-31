export const isValidIranianPhone = (phone: string): boolean => /^09\d{9}$/.test(phone);
