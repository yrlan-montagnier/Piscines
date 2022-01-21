using System;

namespace CSharpDiscovery.Quest02
{
    public class TodayAtMidnight_Exercice
    {
        public static DateTime TodayAtMidnight()
        {
            DateTime midnight = DateTime.Now.Date;
            return new DateTime(midnight.Year, midnight.Month, midnight.Day, 0, 0, 0);
        }
    }
}
