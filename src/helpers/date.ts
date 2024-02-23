const standardDateFormatter = new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

const standardDateTimeFormatter = new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
});

/**
 * Formatted like `dd-mm-yyyy`
 */
export const formatDate = (date: string | Date) => {
    if (date === '') return;

    return standardDateFormatter.format(new Date(date));
};

/**
 * Formatted like `dd-mm-yyyy hh:mm`
 */
export const formatDateTime = (date: string | Date) => {
    if (date === '') return;

    return standardDateTimeFormatter.format(new Date(date));
};
