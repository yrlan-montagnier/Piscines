using System;
using System.Globalization;
namespace CSharpDiscovery.Quest02

{
    public class FromStringToDateTime_Exercice
    {
        public static DateTime FromStringToDateTime(string dateStr)
        {
            CultureInfo info = new CultureInfo("fr-FR");
            return DateTime.Parse(dateStr, info);
        }
    }
}
