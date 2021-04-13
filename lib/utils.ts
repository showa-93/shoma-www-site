import format from "https://deno.land/x/date_fns@v2.15.0/format/index.js";
import parseISO from "https://deno.land/x/date_fns@v2.15.0/parseISO/index.js";
import ja from "https://deno.land/x/date_fns@v2.15.0/locale/ja/index.js";

export function formatDate(date: Date): string {
  return format(
    parseISO(date.toString(), { locale: ja }),
    "yyyy/MM/dd",
    {
      locale: ja,
    },
  );
}
