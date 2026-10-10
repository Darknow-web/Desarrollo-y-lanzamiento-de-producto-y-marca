// Archivo de calendario (.ics) para recordatorios: funciona en Android, iPhone y Google Calendar.
export function descargarRecordatorio({ titulo, fecha, descripcion }: { titulo: string; fecha: string; descripcion: string }) {
  const f = fecha.replace(/-/g, '');
  const sello = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const esc = (s: string) => s.replace(/[\\,;]/g, m => '\\' + m).replace(/\n/g, '\\n');
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//AndiBite//Andi Mision Hierro//ES', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT', `UID:${f}-${Math.random().toString(36).slice(2)}@andibite`, `DTSTAMP:${sello}`,
    `DTSTART;VALUE=DATE:${f}`, `SUMMARY:${esc(titulo)}`, `DESCRIPTION:${esc(descripcion)}`,
    'BEGIN:VALARM', 'TRIGGER:-PT15H', 'ACTION:DISPLAY', `DESCRIPTION:${esc(titulo)}`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  const a = document.createElement('a'); a.href = url; a.download = 'recordatorio-andibite.ics'; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
