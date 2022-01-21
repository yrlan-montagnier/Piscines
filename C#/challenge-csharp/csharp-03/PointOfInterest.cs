namespace CSharpDiscovery.Quest03
{
    public class PointOfInterest 
    {
        public string Name { get;set; }
        public double Latitude { get;set; }
        public double Longitude { get;set; }
        public static string GoogleMapsUrlTemplate { get;set; } = "https://www.google.com/maps/place/{0}/@{1},{2},15z/";
        public static System.Globalization.CultureInfo InvariantCulture { get; }
        public PointOfInterest() {
            Name = "Bordeaux Ynov Campus";
            Latitude = 44.854186;
            Longitude = -0.5663056;
        }
        public PointOfInterest(string name, double latitude, double longitude) {
            Name = name;
            Latitude = latitude;
            Longitude = longitude;
        }
        public string GetGoogleMapsUrl() {
            return (string.Format(GoogleMapsUrlTemplate, Name.Replace(' ','+'),Latitude,Longitude));
        }

        public override string ToString() {
            string result = Name + " (Lat="+Latitude.ToString(InvariantCulture) + ", Long="+Longitude.ToString(InvariantCulture) + ")";
            return result;
        }
        /*
        public int GetDistance(PointOfInterest other) {
            // Your code
        }

        public static int GetDistance(PointOfInterest p1, PointOfInterest p2) {
            // Your code
        }
        */
    }
}