using CSharpDiscovery.Models;

namespace CSharpDiscovery.Quest01
{
    public class NextTrafficLightColor_Exercice
    {
        public static TrafficLightColor GetNextTrafficLightColor(TrafficLightColor currentColor)
        {
            if (currentColor == TrafficLightColor.Red) {
                currentColor = TrafficLightColor.Green;
            }
            else if (currentColor == TrafficLightColor.Green) {
                currentColor = TrafficLightColor.Orange;
            }
            else if (currentColor == TrafficLightColor.Orange) {
                currentColor = TrafficLightColor.Red;
            }
            return currentColor;
        }
    }
}