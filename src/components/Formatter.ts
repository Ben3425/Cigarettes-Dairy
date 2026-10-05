export class Formatter {
  public static ToLocalDateStr(date: Date): string {
    const year = date.getFullYear().toString();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    const localeDate = `${day}.${month}.${year}`;
    return localeDate;
  }
  public static ToDbDateStr(date: Date): string {
    const year = date.getFullYear().toString();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    const dbDate = `${year}-${month}-${day}`;
    return dbDate;
  }
  public static ToDateFormat(dateStr: string): Date {
    const date = new Date(dateStr);
    return date;
  }
  public static GetTimeFormatToString(date: Date): string {
    let timeNow: string = "";
    let hours = date.getHours();
    let strHourA = "";
    let strHourB = "";
    if (hours % 2 !== 0) {
      hours -= 1;
    }
    if (hours < 10) {
      strHourA = "0";
    }
    if (hours + 2 < 10) {
      strHourB = "0";
    }
    strHourA += hours.toString();
    strHourB += (hours + 2).toString();
    timeNow += `${strHourA}-${strHourB}`;
    return timeNow;
  }
  public static FromNumberToString(num: number): string {
    return num.toString();
  }
  public static FromBooleanToString(bool: boolean): string {
    return bool ? "Ja" : "Nein";
  }
  public static FromStringToNumber(str: string): number {
    let num: number = -1;
    try {
      num = Number(str);
    } catch (err) {
      console.error(err);
    }
    return num;
  }
  public static FromDbDateStrToLocalDateStr(dateStr: string): string {
    const split = dateStr.split("-");
    const localStr = `${split[2]}.${split[1]}.${split[0]}`;
    return localStr;
  }
}

