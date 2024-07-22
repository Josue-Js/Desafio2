export function removeTags(value: string) {
    return value.replace(/<[^>]*>?/gm, '');
}